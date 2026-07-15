import React, { useState } from 'react';

export const CONTACT_LIMITS = Object.freeze({
  name: 80,
  email: 254,
  company: 120,
  project: 4000,
});

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContactForm(values = {}) {
  const normalized = {
    name: normalizeText(values.name),
    email: normalizeText(values.email).toLowerCase(),
    company: normalizeText(values.company),
    project: normalizeText(values.project),
  };
  const errors = {};

  if (!normalized.name) {
    errors.name = 'Enter your name.';
  } else if (normalized.name.length > CONTACT_LIMITS.name) {
    errors.name = `Use ${CONTACT_LIMITS.name} characters or fewer.`;
  }

  if (!normalized.email) {
    errors.email = 'Enter your email address.';
  } else if (
    normalized.email.length > CONTACT_LIMITS.email ||
    !isEmail(normalized.email)
  ) {
    errors.email = 'Enter a valid email address.';
  }

  if (normalized.company.length > CONTACT_LIMITS.company) {
    errors.company = `Use ${CONTACT_LIMITS.company} characters or fewer.`;
  }

  if (!normalized.project) {
    errors.project = 'Describe your project.';
  } else if (normalized.project.length > CONTACT_LIMITS.project) {
    errors.project = `Use ${CONTACT_LIMITS.project} characters or fewer.`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: normalized,
  };
}

export function buildContactPayload(values = {}) {
  const validation = validateContactForm(values);

  if (!validation.valid) {
    return {
      valid: false,
      errors: validation.errors,
      payload: null,
    };
  }

  return {
    valid: true,
    errors: {},
    payload: {
      name: validation.values.name,
      email: validation.values.email,
      company: validation.values.company,
      project: validation.values.project,
    },
  };
}

export function buildMailtoFallback(values = {}, recipient = '') {
  const result = buildContactPayload(values);
  const address = normalizeText(recipient);

  if (!result.valid || !address || !isEmail(address)) {
    return {
      href: null,
      subject: '',
      body: '',
      message: address
        ? 'Correct the form before creating an email draft.'
        : 'A public contact email has not been configured.',
    };
  }

  const subject = `Project enquiry from ${result.payload.name}`;
  const body = [
    `Name: ${result.payload.name}`,
    `Email: ${result.payload.email}`,
    `Company: ${result.payload.company || 'Not provided'}`,
    '',
    'Project details:',
    result.payload.project,
  ].join('\n');

  return {
    href: `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    subject,
    body,
    message: 'Use your email application to send this enquiry.',
  };
}

async function copyFallbackText(fallback) {
  if (
    !fallback.body ||
    typeof navigator === 'undefined' ||
    !navigator.clipboard ||
    typeof navigator.clipboard.writeText !== 'function'
  ) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(
      `${fallback.subject}\n\n${fallback.body}`,
    );
    return true;
  } catch {
    return false;
  }
}

export async function submitContactRequest(values = {}, options = {}) {
  const result = buildContactPayload(values);
  const fallback = buildMailtoFallback(values, options.recipient);

  if (!result.valid) {
    return {
      ok: false,
      errors: result.errors,
      fallback,
      copied: false,
    };
  }

  const endpoint = normalizeText(options.endpoint);
  if (!/^https:\/\//i.test(endpoint) || typeof fetch !== 'function') {
    return {
      ok: false,
      errors: {},
      fallback,
      copied: await copyFallbackText(fallback),
    };
  }

  const timeout = Number.isFinite(options.timeout) && options.timeout > 0
    ? options.timeout
    : 10000;
  const controller = typeof AbortController === 'function'
    ? new AbortController()
    : null;
  const timer = controller
    ? setTimeout(() => controller.abort(), timeout)
    : null;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(result.payload),
      signal: controller ? controller.signal : undefined,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    return {
      ok: true,
      errors: {},
      fallback: null,
      copied: false,
      data,
    };
  } catch {
    return {
      ok: false,
      errors: {},
      fallback,
      copied: await copyFallbackText(fallback),
    };
  } finally {
    if (timer !== null) {
      clearTimeout(timer);
    }
  }
}

const INITIAL_VALUES = Object.freeze({
  name: '',
  email: '',
  company: '',
  project: '',
});

export default function Contact({
  endpoint,
  recipient,
  timeout,
  title = 'Start a conversation',
}) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [fallback, setFallback] = useState(null);
  const [sending, setSending] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    const validation = validateContactForm(values);
    setErrors(validation.errors);
    setStatus('');
    setFallback(null);

    if (!validation.valid) {
      return;
    }

    setSending(true);
    const outcome = await submitContactRequest(validation.values, {
      endpoint,
      recipient,
      timeout,
    });
    setSending(false);

    if (outcome.ok) {
      setValues(INITIAL_VALUES);
      setStatus('Your enquiry has been sent.');
      return;
    }

    setErrors(outcome.errors);
    setFallback(outcome.fallback);
    setStatus(
      outcome.copied
        ? 'Sending was unavailable. A copy of your enquiry is ready to paste.'
        : 'Sending was unavailable. Please use the available fallback.',
    );
  }

  function field(label, name, type = 'text', required = false) {
    const error = errors[name];
    const common = {
      id: `contact-${name}`,
      name,
      type,
      value: values[name],
      onChange: updateField,
      required,
      'aria-invalid': Boolean(error),
      'aria-describedby': error ? `contact-${name}-error` : undefined,
    };

    return React.createElement(
      'div',
      { className: 'contact-field', key: name },
      React.createElement('label', { htmlFor: common.id }, label),
      name === 'project'
        ? React.createElement('textarea', {
            ...common,
            rows: 6,
            maxLength: CONTACT_LIMITS.project,
          })
        : React.createElement('input', {
            ...common,
            maxLength: CONTACT_LIMITS[name],
          }),
      error
        ? React.createElement(
            'p',
            { id: `contact-${name}-error`, className: 'field-error' },
            error,
          )
        : null,
    );
  }

  return React.createElement(
    'section',
    { className: 'contact-section', 'aria-labelledby': 'contact-title' },
    React.createElement(
      'div',
      { className: 'contact-card' },
      React.createElement('h1', { id: 'contact-title' }, title),
      React.createElement(
        'p',
        null,
        'Share a little about your project and the best way to reply.',
      ),
      React.createElement(
        'form',
        { onSubmit: submit, noValidate: true },
        field('Name', 'name', 'text', true),
        field('Email address', 'email', 'email', true),
        field('Company or organisation', 'company'),
        field('Project details', 'project', 'text', true),
        React.createElement(
          'button',
          { type: 'submit', disabled: sending },
          sending ? 'Sending…' : 'Send enquiry',
        ),
      ),
      status
        ? React.createElement(
            'p',
            { className: 'contact-status', role: 'status' },
            status,
          )
        : null,
      fallback && fallback.href
        ? React.createElement(
            'a',
            { className: 'contact-fallback', href: fallback.href },
            'Open an email draft instead',
          )
        : null,
      fallback && !fallback.href
        ? React.createElement(
            'p',
            { className: 'contact-fallback' },
            fallback.message,
          )
        : null,
    ),
  );
}

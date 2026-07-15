import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  buildContactPayload,
  buildMailtoFallback,
  submitContactRequest,
  validateContactForm,
} from './contact.js';

const endpoint = 'https://api.example.com/contact';
const recipient = 'studio@example.com';

const completeContact = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: '',
  project: 'I need an accessible editorial website.',
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('validateContactForm', () => {
  it('returns validation errors and normalized values for incomplete details', () => {
    const validation = validateContactForm({
      name: '  ',
      email: 'not-an-email',
      project: ' ',
    });

    expect(validation.valid).toBe(false);
    expect(validation.errors).toEqual(expect.objectContaining({
      name: expect.any(String),
      email: expect.any(String),
      project: expect.any(String),
    }));
    expect(validation.values).toEqual({
      name: '',
      email: 'not-an-email',
      company: '',
      project: '',
    });
  });

  it('accepts complete contact details and trims submitted values', () => {
    const validation = validateContactForm({
      name: '  Ada Lovelace  ',
      email: '  ada@example.com  ',
      project: '  I need an accessible editorial website.  ',
    });

    expect(validation.valid).toBe(true);
    expect(validation.errors).toEqual({});
    expect(validation.values).toEqual(completeContact);
  });
});

describe('buildContactPayload', () => {
  it('returns a valid structured payload for normalized complete details', () => {
    const result = buildContactPayload({
      name: '  Ada Lovelace  ',
      email: '  ada@example.com  ',
      project: '  I need an accessible editorial website.  ',
    });

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.payload).toEqual(completeContact);
  });

  it('keeps validation failures out of the request payload', () => {
    const result = buildContactPayload({
      name: '',
      email: 'not-an-email',
      project: '',
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toEqual(expect.objectContaining({
      name: expect.any(String),
      email: expect.any(String),
      project: expect.any(String),
    }));
    expect(result.payload).toBeNull();
  });
});

describe('buildMailtoFallback', () => {
  it('returns an encoded mailto fallback for a configured recipient', () => {
    const fallback = buildMailtoFallback(
      {
        name: 'Ada & Lovelace',
        email: 'ada@example.com',
        project: 'A project with spaces & punctuation.',
      },
      recipient,
    );

    expect(fallback.href).toContain(`mailto:${recipient}`);
    expect(fallback.href).toContain(encodeURIComponent('Ada & Lovelace'));
    expect(fallback.href).toContain(
      encodeURIComponent('A project with spaces & punctuation.'),
    );
  });

  it('reports an unavailable fallback without a recipient', () => {
    const fallback = buildMailtoFallback(completeContact, '');

    expect(fallback.href).toBeNull();
    expect(fallback.message).toEqual(expect.any(String));
  });
});

describe('submitContactRequest', () => {
  it('reports delivery for every successful 2xx response', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await submitContactRequest(completeContact, {
      endpoint,
      recipient,
    });

    expect(result.ok).toBe(true);
    expect(result.fallback).toBeNull();
    expect(result.copied).toBe(false);
    expect(fetchMock).toHaveBeenCalledWith(
      endpoint,
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(completeContact),
      }),
    );
  });

  it('uses a mailto fallback when no endpoint is configured', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await submitContactRequest(completeContact, {
      recipient,
    });

    expect(result.ok).toBe(false);
    expect(result.copied).toBe(false);
    expect(result.fallback).toEqual(expect.objectContaining({
      href: expect.stringContaining(`mailto:${recipient}`),
    }));
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('does not report delivery when the endpoint returns a non-2xx response', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    }));

    const result = await submitContactRequest(completeContact, {
      endpoint,
      recipient,
    });

    expect(result.ok).toBe(false);
    expect(result.copied).toBe(false);
    expect(result.fallback).toEqual(expect.objectContaining({
      href: expect.stringContaining(`mailto:${recipient}`),
    }));
  });

  it('uses fallback when a configured request cannot be completed', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));

    const result = await submitContactRequest(completeContact, {
      endpoint,
      recipient,
    });

    expect(result.ok).toBe(false);
    expect(result.copied).toBe(false);
    expect(result.fallback).toEqual(expect.objectContaining({
      href: expect.stringContaining(`mailto:${recipient}`),
    }));
  });
});

import React, { useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const emptyValues = {
  name: '',
  email: '',
  project: '',
  budget: '',
  timeline: '',
  consent: false,
  website: '',
};

const copy = {
  en: {
    eyebrow: 'Start a conversation',
    title: 'Tell us what you are building.',
    intro: 'Share a little context and we will help you choose the next step.',
    name: 'Name',
    email: 'Email address',
    project: 'Project details',
    budget: 'Budget range (optional)',
    timeline: 'Timeline (optional)',
    budgetOptions: [
      ['', 'Select a range'],
      ['under-5k', 'Under €5,000'],
      ['5k-15k', '€5,000–€15,000'],
      ['15k-30k', '€15,000–€30,000'],
      ['over-30k', 'Over €30,000'],
      ['discuss', 'Prefer to discuss'],
    ],
    timelineOptions: [
      ['', 'Select a timeline'],
      ['soon', 'Within 1 month'],
      ['quarter', 'Within 3 months'],
      ['later', 'More than 3 months'],
      ['flexible', 'Flexible'],
    ],
    consent: 'I agree that these details may be used to respond to this enquiry.',
    send: 'Send enquiry',
    sending: 'Sending…',
    delivered: 'Thank you. Your enquiry has been received.',
    unavailable: 'Online delivery is not available right now. You can still contact us directly.',
    failed: 'We could not deliver your message. Your entered details are still here.',
    spam: 'We could not send this enquiry. Please contact us directly if you need help.',
    emailFallback: 'Email us directly',
    copyFallback: 'Copy message',
    copied: 'Message copied.',
    copyFailed: 'Copy the message below.',
    nameError: 'Please share your name.',
    emailRequiredError: 'Please share an email address.',
    emailInvalidError: 'Enter a valid email address.',
    projectError: 'Tell us a little about your project.',
    consentError: 'Consent is required before sending.',
  },
  fr: {
    eyebrow: 'Démarrons la conversation',
    title: 'Parlez-nous de votre projet.',
    intro: 'Partagez quelques informations et nous vous aiderons à choisir la prochaine étape.',
    name: 'Nom',
    email: 'Adresse e-mail',
    project: 'Détails du projet',
    budget: 'Budget indicatif (facultatif)',
    timeline: 'Calendrier (facultatif)',
    budgetOptions: [
      ['', 'Choisir une tranche'],
      ['under-5k', 'Moins de 5 000 €'],
      ['5k-15k', '5 000 €–15 000 €'],
      ['15k-30k', '15 000 €–30 000 €'],
      ['over-30k', 'Plus de 30 000 €'],
      ['discuss', 'À discuter'],
    ],
    timelineOptions: [
      ['', 'Choisir un délai'],
      ['soon', 'Dans le mois'],
      ['quarter', 'Dans les 3 mois'],
      ['later', 'Dans plus de 3 mois'],
      ['flexible', 'Flexible'],
    ],
    consent: 'J’accepte que ces informations soient utilisées pour répondre à cette demande.',
    send: 'Envoyer la demande',
    sending: 'Envoi en cours…',
    delivered: 'Merci. Votre demande a bien été reçue.',
    unavailable: 'L’envoi en ligne est indisponible pour le moment. Vous pouvez toujours nous contacter directement.',
    failed: 'Nous n’avons pas pu envoyer votre message. Les informations saisies sont toujours présentes.',
    spam: 'Nous n’avons pas pu envoyer cette demande. Contactez-nous directement si vous avez besoin d’aide.',
    emailFallback: 'Nous écrire directement',
    copyFallback: 'Copier le message',
    copied: 'Message copié.',
    copyFailed: 'Copiez le message ci-dessous.',
    nameError: 'Veuillez indiquer votre nom.',
    emailRequiredError: 'Veuillez indiquer une adresse e-mail.',
    emailInvalidError: 'Veuillez saisir une adresse e-mail valide.',
    projectError: 'Parlez-nous un peu de votre projet.',
    consentError: 'Votre consentement est nécessaire avant l’envoi.',
  },
};

function validate(values, text) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = text.nameError;
  }
  if (!values.email.trim()) {
    errors.email = text.emailRequiredError;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = text.emailInvalidError;
  }
  if (!values.project.trim()) {
    errors.project = text.projectError;
  }
  if (!values.consent) {
    errors.consent = text.consentError;
  }
  if (values.website.trim()) {
    errors.website = true;
  }

  return errors;
}

function configuredValue(config, names) {
  const source = config && typeof config === 'object' ? config : {};
  const contact = source.contact && typeof source.contact === 'object' ? source.contact : {};

  for (const name of names) {
    if (typeof source[name] === 'string' && source[name].trim()) {
      return source[name].trim();
    }
    if (typeof contact[name] === 'string' && contact[name].trim()) {
      return contact[name].trim();
    }
  }

  return '';
}

function deliveryConfig(config) {
  const endpoint = configuredValue(config, ['endpoint', 'contactEndpoint', 'submissionEndpoint']);
  const recipient = configuredValue(config, ['recipient', 'email', 'contactEmail']);
  const isHttpsEndpoint = /^https:\/\//i.test(endpoint);
  const isEmailRecipient = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient);

  return {
    endpoint: isHttpsEndpoint ? endpoint : '',
    recipient: isEmailRecipient ? recipient : '',
  };
}

function fallbackMessage(values, locale) {
  const labels = locale === 'fr'
    ? {
      name: 'Nom',
      email: 'E-mail',
      project: 'Projet',
      budget: 'Budget',
      timeline: 'Calendrier',
    }
    : {
      name: 'Name',
      email: 'Email',
      project: 'Project',
      budget: 'Budget',
      timeline: 'Timeline',
    };

  return [
    `${labels.name}: ${values.name}`,
    `${labels.email}: ${values.email}`,
    `${labels.project}: ${values.project}`,
    `${labels.budget}: ${values.budget || '—'}`,
    `${labels.timeline}: ${values.timeline || '—'}`,
  ].join('\n');
}

function configuredFallback(values, locale, recipient) {
  const copyText = fallbackMessage(values, locale);
  const subject = locale === 'fr' ? 'Demande de contact SPQE Lab' : 'SPQE Lab contact enquiry';

  return {
    mailtoHref: recipient
      ? `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(copyText)}`
      : '',
    copyText: recipient ? copyText : '',
  };
}

function fallbackDetails(result, defaults) {
  const adapterFallback = result && result.fallback ? result.fallback : result || {};
  return {
    mailtoHref: adapterFallback.mailtoHref || adapterFallback.mailto || adapterFallback.href || defaults.mailtoHref,
    copyText: adapterFallback.copyText || adapterFallback.message || adapterFallback.body || defaults.copyText,
  };
}

function localizedContent(locale, content) {
  const source = content && typeof content === 'object' ? content : {};
  const localized = source[locale] && typeof source[locale] === 'object'
    ? source[locale]
    : source;
  const formContent = localized.contactForm && typeof localized.contactForm === 'object'
    ? localized.contactForm
    : localized;

  return {
    ...copy[locale === 'fr' ? 'fr' : 'en'],
    ...formContent,
  };
}

export function ContactForm({ locale = 'en', content, config, onSubmit }) {
  const activeLocale = locale === 'fr' ? 'fr' : 'en';
  const text = localizedContent(activeLocale, content);
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [fallback, setFallback] = useState({ mailtoHref: '', copyText: '' });
  const [copyState, setCopyState] = useState('idle');

  const updateValue = (event) => {
    const { name, type, checked, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (state !== 'idle') {
      setState('idle');
      setFallback({ mailtoHref: '', copyText: '' });
      setCopyState('idle');
    }
  };

  const copyFallbackMessage = async () => {
    if (!fallback.copyText) {
      return;
    }

    try {
      if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(fallback.copyText);
      setCopyState('copied');
    } catch (error) {
      setCopyState('failed');
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values, text);
    setErrors(nextErrors);
    setCopyState('idle');

    if (nextErrors.website) {
      setState('spam');
      return;
    }
    if (Object.keys(nextErrors).length > 0) {
      setState('idle');
      return;
    }

    const submission = {
      name: values.name.trim(),
      email: values.email.trim(),
      project: values.project.trim(),
      budget: values.budget,
      timeline: values.timeline,
    };
    const delivery = deliveryConfig(config);
    const defaultFallback = configuredFallback(submission, activeLocale, delivery.recipient);

    if (typeof onSubmit !== 'function' || !delivery.endpoint) {
      setFallback(defaultFallback);
      setState('unavailable');
      return;
    }

    setState('busy');
    try {
      const result = await onSubmit(submission, {
        endpoint: delivery.endpoint,
        recipient: delivery.recipient,
      });

      if (result && result.ok === true) {
        setState('delivered');
        setValues(emptyValues);
        setErrors({});
        setFallback({ mailtoHref: '', copyText: '' });
        return;
      }

      setFallback(fallbackDetails(result, defaultFallback));
      setState(result && result.reason === 'unconfigured' ? 'unavailable' : 'failed');
    } catch (error) {
      setFallback(defaultFallback);
      setState('failed');
    }
  };

  const isBusy = state === 'busy';

  return html`
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-card">
        <p className="eyebrow">${text.eyebrow}</p>
        <h2 id="contact-form-title">${text.title}</h2>
        <p className="contact-form-intro">${text.intro}</p>

        <form className="contact-form" onSubmit=${submitForm} noValidate>
          <div className="contact-form__field">
            <label htmlFor="contact-name">${text.name}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value=${values.name}
              onChange=${updateValue}
              aria-invalid=${Boolean(errors.name)}
              aria-describedby=${errors.name ? 'contact-name-error' : undefined}
              disabled=${isBusy}
            />
            ${errors.name && html`<p id="contact-name-error" className="field-error" role="alert">${errors.name}</p>`}
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-email">${text.email}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value=${values.email}
              onChange=${updateValue}
              aria-invalid=${Boolean(errors.email)}
              aria-describedby=${errors.email ? 'contact-email-error' : undefined}
              disabled=${isBusy}
            />
            ${errors.email && html`<p id="contact-email-error" className="field-error" role="alert">${errors.email}</p>`}
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-project">${text.project}</label>
            <textarea
              id="contact-project"
              name="project"
              rows="6"
              value=${values.project}
              onChange=${updateValue}
              aria-invalid=${Boolean(errors.project)}
              aria-describedby=${errors.project ? 'contact-project-error' : undefined}
              disabled=${isBusy}
            ></textarea>
            ${errors.project && html`<p id="contact-project-error" className="field-error" role="alert">${errors.project}</p>`}
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-budget">${text.budget}</label>
            <select
              id="contact-budget"
              name="budget"
              value=${values.budget}
              onChange=${updateValue}
              disabled=${isBusy}
            >
              ${text.budgetOptions.map(([value, label]) => html`<option value=${value}>${label}</option>`)}
            </select>
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-timeline">${text.timeline}</label>
            <select
              id="contact-timeline"
              name="timeline"
              value=${values.timeline}
              onChange=${updateValue}
              disabled=${isBusy}
            >
              ${text.timelineOptions.map(([value, label]) => html`<option value=${value}>${label}</option>`)}
            </select>
          </div>

          <div className="contact-form__honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              value=${values.website}
              onChange=${updateValue}
            />
          </div>

          <div className="contact-form__consent">
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              checked=${values.consent}
              onChange=${updateValue}
              aria-invalid=${Boolean(errors.consent)}
              aria-describedby=${errors.consent ? 'contact-consent-error' : undefined}
              disabled=${isBusy}
            />
            <label htmlFor="contact-consent">${text.consent}</label>
          </div>
          ${errors.consent && html`<p id="contact-consent-error" className="field-error" role="alert">${errors.consent}</p>`}

          <button className="button button--primary" type="submit" disabled=${isBusy}>
            ${isBusy ? text.sending : text.send}
          </button>

          ${state === 'delivered' && html`
            <p className="contact-form__status contact-form__status--success" role="status">
              ${text.delivered}
            </p>
          `}
          ${state === 'spam' && html`
            <p className="contact-form__status contact-form__status--notice" role="status">
              ${text.spam}
            </p>
          `}
          ${(state === 'unavailable' || state === 'failed') && html`
            <div className="contact-form__status contact-form__status--notice" role="status">
              <p>${state === 'unavailable' ? text.unavailable : text.failed}</p>
              ${fallback.mailtoHref && html`
                <p><a className="contact-form__fallback-link" href=${fallback.mailtoHref}>${text.emailFallback}</a></p>
              `}
              ${fallback.copyText && html`
                <div className="contact-form__fallback-copy">
                  <button className="button button--secondary" type="button" onClick=${copyFallbackMessage}>
                    ${text.copyFallback}
                  </button>
                  ${copyState === 'copied' && html`<p role="status">${text.copied}</p>`}
                  ${copyState === 'failed' && html`<p role="status">${text.copyFailed}</p>`}
                  ${copyState === 'failed' && html`<textarea readOnly value=${fallback.copyText} aria-label=${text.copyFallback}></textarea>`}
                </div>
              `}
            </div>
          `}
        </form>
      </div>
    </section>
  `;
}

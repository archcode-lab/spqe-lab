import React from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';
import App from './App.js';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/responsive.css';

const html = htm.bind(React.createElement);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('The application root element "#root" is required.');
}

createRoot(rootElement).render(html`<${React.StrictMode}><${App} /></${React.StrictMode}>`);

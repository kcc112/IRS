import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '../src/app/app';
import '../src/lib/i18n/i18n';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

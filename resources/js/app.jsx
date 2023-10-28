// import './bootstrap';
// import '../css/app.css';
// import '../js/app.jsx'

// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// createInertiaApp({
//   title: (title) => `${title} - ${appName}`,
//   resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//   setup({ el, App, props }) {
//     const root = createRoot(el);

//     root.render(<App {...props} />);
//   },
//   progress: {
//     color: '#4B5563',
//   },
// });

import './bootstrap';
import '../css/app.css';
import '../js/app.jsx'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({

  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },

  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />)
  },
  progress: {
    color: '#4B5563',
  },
})
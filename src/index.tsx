import React from 'react';
import ReactDOM from 'react-dom/client';
import Vic from './pages/Vic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Vic />
  </React.StrictMode>
);

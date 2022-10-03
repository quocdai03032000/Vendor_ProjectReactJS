import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VendorProvider } from './stote/VendorContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VendorProvider>
      <App />
    </VendorProvider>
  </React.StrictMode>
);

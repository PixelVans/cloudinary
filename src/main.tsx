import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18

import './index.css'; // Import Tailwind CSS
import App from './App';

// Create a root DOM node and render the App component
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



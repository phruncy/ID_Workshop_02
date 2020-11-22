/* This is the boostrap for the React App */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Renders the entire App Component to the root node in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

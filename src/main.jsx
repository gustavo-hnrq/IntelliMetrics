import './globals.css';
import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement

import { App } from './App.jsx'; // Verify the import path for App.jsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
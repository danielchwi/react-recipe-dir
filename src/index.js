import React from 'react';
import ReactDOM from 'react-dom';

// app bootstrap
import App from './App';

// style
import './index.css';

//context
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

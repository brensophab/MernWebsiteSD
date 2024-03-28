import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //Remove the React.StrictMode later when you are testing the application and your data is being fetched twice
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);
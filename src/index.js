import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContext, { AuthProvider } from './service/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider >
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
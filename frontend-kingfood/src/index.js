import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import AfterLoginPage from './Pages/AfterLoginPage';
import MenuPage from './Pages/MenuPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Router>
     <Routes>
      <Route path="/MenuPage" element={<MenuPage />} />
      <Route path="/afterlogin" element={<AfterLoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
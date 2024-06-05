import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import AfterLoginPage from './Pages/AfterLoginPage';
import MenuPage from './Pages/MenuPage';
import AdminPage from './Pages/AdminPage';
import { CartProvider } from '../src/Context/CartContext'; // Import CartProvider from your CartContext module
import ShoppingCartMenuPage from './Pages/ShoppingCartMenuPage';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <CartProvider> {/* Bao bọc toàn bộ ứng dụng với CartProvider */}
      <Router>
        <Routes>
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/afterlogin" element={<AfterLoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping-cart" element={<ShoppingCartMenuPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

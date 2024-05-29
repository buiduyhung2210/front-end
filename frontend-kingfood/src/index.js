import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MenuPage from './Pages/MenuPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MenuPage" element={<MenuPage />} />
    </Routes>
  </Router>
);

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo'; // Import the ProductInfo component
import NotFound from './components/NotFound'; // Import the NotFound component

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Products />
              <Showcase />
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productInfo/:productId" element={<ProductInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;

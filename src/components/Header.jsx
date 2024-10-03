import React, { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { RxCross2 } from 'react-icons/rx';
import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-4 z-50 ">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="text-white flex items-center">
            <img src={Logo} alt="logo" className="h-10 w-10 mr-2" />
            <h1 className="font-bold text-xl">Pop Rock Crystal</h1>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 text-xl">
          <Link to="/" className="text-white hover:text-blue-200 transition duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-200 transition duration-300">About Us</Link>
          <Link to="/products" className="text-white hover:text-blue-200 transition duration-300">Products</Link>
          <Link to="/help" className="text-white hover:text-blue-200 transition duration-300">Help</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <img src={Cart} alt="cart" className="h-6 w-6 cursor-pointer hover:opacity-80 transition duration-300" />
          <button onClick={toggleMenu} className="text-white md:hidden focus:outline-none">
            {isMenuOpen ? <RxCross2 size={24} /> : <TfiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center mt-2 text-lg">
          <Link to="/" className="text-white hover:text-blue-200 transition duration-300 py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-white hover:text-blue-200 transition duration-300 py-2" onClick={toggleMenu}>About Us</Link>
          <Link to="/products" className="text-white hover:text-blue-200 transition duration-300 py-2" onClick={toggleMenu}>Products</Link>
          <Link to="/help" className="text-white hover:text-blue-200 transition duration-300 py-2" onClick={toggleMenu}>Help</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

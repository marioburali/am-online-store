import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon/CartIcon';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-[#0B62FF] to-[#2D8CFF] text-white shadow-md p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <img className="logo cursor-pointer" src={ logo } alt="logo" onClick={ () => navigate('/') } />
        <SearchBar setIsSearched={ setIsSearched } />
        <div className="flex items-center space-x-4">
          <NavLink
            data-testid="shopping-cart-button"
            to="/cart"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <CartIcon />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

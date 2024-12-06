import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../Components/Categories';
import SearchBar from '../Components/SearchBar';
import { Product } from '../Types';
import ProductsList from '../Components/ProductsList';
import CartIcon from '../Components/CartIcon/CartIcon';
import logo from '../AM.png';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-[#0B62FF] to-[#2D8CFF] text-white shadow-md p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <img className="logo"src={logo} alt="logo" />
          <SearchBar setResults={ setProducts } setIsSearched={ setIsSearched } />
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
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Categorias</h2>
            <Categories setResults={ setProducts } setIsSearched={ setIsSearched } />
          </div>
        </aside>
        <main className="overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductsList isSearched={ isSearched } products={ products } />
        </main>
      </div>
    </div>
  );
}

export default Home;

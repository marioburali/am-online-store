import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../Components/Categories';
import SearchBar from '../Components/SearchBar';
import { Product } from '../Types';
import ProductsList from '../Components/ProductsList';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <main>
      <NavLink data-testid="shopping-cart-button" to="/cart">Carrinho</NavLink>
      <SearchBar setResults={ setProducts } setIsSearched={ setIsSearched } />
      <aside>
        <Categories setResults={ setProducts } setIsSearched={ setIsSearched } />
      </aside>
      <section>
        <ProductsList isSearched={ isSearched } products={ products } />
      </section>
    </main>
  );
}

export default Home;

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard';
import SearchBar from '../Components/SearchBar';
import { Product } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import AddToCart from '../Components/AddToCart';

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
        {products.length > 0
          ? (products.map((product) => (
            <NavLink
              data-testid="product-detail-link"
              to={ `/product/${createURLSlug(product.title)}` }
              state={ { product } }
              key={ product.id }
            >
              <ProductCard { ...product } />
              <AddToCart datatestid="product-add-to-cart" product={ product } />
            </NavLink>)))
          : (isSearched && <h2>Nenhum produto foi encontrado</h2>)}
      </section>
    </main>
  );
}

export default Home;

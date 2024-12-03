import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Categories from '../Components/Categories';
import { getProductsFromQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';
import { Product } from '../Types';

function Home() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { results } = await getProductsFromQuery(query);
    setIsSearched(true);
    setResults(results);
  }
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);
  return (
    <main>
      <NavLink data-testid="shopping-cart-button" to="/cart">Carrinho</NavLink>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <form onSubmit={ (event) => onSubmit(event) }>
        <label htmlFor="query-input">
          Search
          <input
            type="text"
            id="query-input"
            data-testid="query-input"
            onChange={ ({ target }) => setQuery(target.value) }
          />
        </label>
        <button type="submit" data-testid="query-button">Pesquisar</button>
      </form>
      <aside>
        <Categories />
      </aside>
      <section>
        {results.length > 0
          ? (results.map((prod) => (<ProductCard key={ prod.id } { ...prod } />)))
          : (isSearched && <h2>Nenhum produto foi encontrado</h2>)}
      </section>
    </main>
  );
}

export default Home;

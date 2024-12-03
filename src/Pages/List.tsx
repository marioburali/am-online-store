import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Categories from '../Components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

function List() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { results } = await getProductsFromCategoryAndQuery(query);
    setIsSearched(true);
    setResults(results);
  }
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<[]>([]);
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
      {results.length > 0
        ? (
          results.map(({ id, title, thumbnail, price }) => (
            <div key={ id } data-testid="product">
              <p>{title}</p>
              <img src={ thumbnail } alt={ thumbnail } />
              <p>{price}</p>
            </div>
          ))
        )
        : (
          isSearched && <h2>Nenhum produto foi encontrado</h2>
        )}
    </main>
  );
}

export default List;

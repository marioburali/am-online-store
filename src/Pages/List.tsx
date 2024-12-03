import React, { useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Result } from '../types';

function List() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { results } = await getProductsFromCategoryAndQuery(query);
    setIsSearched(true);
    setResults(results);
  }
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [isSearched, setIsSearched] = useState(false);
  return (
    <main>
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

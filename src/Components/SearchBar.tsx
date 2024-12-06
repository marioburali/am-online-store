import React, { useState } from 'react';
import { SearchBarProps } from '../Types';
import { getProductsFromQuery } from '../services/api';

function SearchBar({ setResults, setIsSearched }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { results } = await getProductsFromQuery(query);
    setResults(results);
    setIsSearched(true);
  };

  return (
    <div>
      <h2>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <form onSubmit={ onSubmit }>
        <label htmlFor="query-input">
          Search
          <input
            type="text"
            id="query-input"

            value={ query }
            onChange={ ({ target }) => setQuery(target.value) }
          />
        </label>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchBar;

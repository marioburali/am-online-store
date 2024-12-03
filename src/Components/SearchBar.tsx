import React from 'react';

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function SearchBar({ query, setQuery, onSubmit }:SearchBarProps) {
  return (
    <div>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <form onSubmit={ onSubmit }>
        <label htmlFor="query-input">
          Search
          <input
            type="text"
            id="query-input"
            data-testid="query-input"
            value={ query }
            onChange={ ({ target }) => setQuery(target.value) }
          />
        </label>
        <button type="submit" data-testid="query-button">Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchBar;

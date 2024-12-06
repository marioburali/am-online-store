import React, { useState } from 'react';
import { SearchBarProps } from '../Types';
import { getProductsFromQuery } from '../services/api';
import { Button } from './ui/button';
import { Input } from './ui/input';

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
        <div className="flex w-full max-w-sm items-center space-x-2">
          <label htmlFor="query-input">
            <Input
              type="text"
              id="query-input"
              data-testid="query-input"
              value={ query }
              onChange={ ({ target }) => setQuery(target.value) }
            />
          </label>

          <Button
            variant="secondary"
            type="submit"
            data-testid="query-button"
          >
            Pesquisar
          </Button>
        </div>

      </form>
    </div>
  );
}

export default SearchBar;

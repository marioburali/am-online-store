import React from 'react';

function List() {
  return (
    <main>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <form>
        <label htmlFor="list">
          Search
          <input type="text" id="list" />
        </label>
        <button type="submit">Pesquisar</button>
      </form>
    </main>
  );
}

export default List;

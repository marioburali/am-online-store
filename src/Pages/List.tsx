import { NavLink } from 'react-router-dom';
import React from 'react';
import Categories from '../Components/Categories';

function List() {
  return (
    <main>
      <NavLink data-testid="shopping-cart-button" to="/cart">Carrinho</NavLink>
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
      <aside>
        <Categories />
      </aside>
    </main>
  );
}

export default List;

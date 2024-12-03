import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Categories from '../Components/Categories';
import { getProductsFromCategory, getProductsFromQuery } from '../services/api';
import ProductCard from '../Components/ProductCard';
import { Result } from '../Types';
import SearchBar from '../Components/SearchBar';

function Home() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { results } = await getProductsFromQuery(query);
    setIsSearched(true);
    setResults(results);
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => onSubmit(event);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleCategory = async (categoryId: string) => {
    const data = await getProductsFromCategory(categoryId);
    setResults(data.results);
  };

  return (
    <main>
      <NavLink data-testid="shopping-cart-button" to="/cart">Carrinho</NavLink>
      <SearchBar query={ query } setQuery={ setQuery } onSubmit={ handleFormSubmit } />
      <aside>
        <Categories onChange={ handleCategory } />
      </aside>
      <section>
        {results.length > 0
          ? (
            results.map(({ id, title, thumbnail, price }) => (
              <ProductCard
                key={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />))
          )
          : (
            isSearched && <h2>Nenhum produto foi encontrado</h2>
          )}
      </section>
    </main>
  );
}

export default Home;

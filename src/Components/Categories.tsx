import React, { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { Category, CategoriesProps } from '../Types';

export default function Categories({ setResults, setIsSearched }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  const handleCategory = async (categoryId: string) => {
    const data = await getProductsFromCategory(categoryId);
    setResults(data.results);
    setIsSearched(false);
  };

  return (
    <div>
      <h3>Categorias</h3>
      <ul>
        {categories.map((category) => {
          return (
            <li key={ category.id }>
              <input
                type="radio"
                id={ `categoria-${category.id}` }
                name="category"
                value={ category.name }
                onClick={ () => handleCategory(category.id) }
              />
              <label htmlFor={ `categoria-${category.id}` }>
                {category.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

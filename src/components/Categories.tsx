import React, { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { Category } from '../Types';
import { useProductContext } from '../context/ProductContext';

export default function Categories() {
  const { setProducts, setIsSearched, setIsLoading } = useProductContext();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  const handleCategory = async (categoryId: string) => {
    setIsLoading(true);
    const { results } = await getProductsFromCategory(categoryId);
    setProducts(results);
    setIsSearched(false);
    setIsLoading(false);
  };

  return (
    <div>
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

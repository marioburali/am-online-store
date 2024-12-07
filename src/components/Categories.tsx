import React, { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { Category, CategoriesProps } from '../Types';
import { useProductContext } from '../context/ProductContext';

export default function Categories({ setIsSearched }: CategoriesProps) {
  const { setProducts } = useProductContext();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  const handleCategory = async (categoryId: string) => {
    const { results } = await getProductsFromCategory(categoryId);
    setProducts(results);
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

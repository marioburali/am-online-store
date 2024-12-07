import React, { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { Category } from '../Types';
import { useProductContext } from '../context/ProductContext';

export default function Categories() {
  const { setProducts, setIsSearched, setIsLoading } = useProductContext();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  const handleCategory = async (categoryId: string) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
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
                className="hidden"
              />
              <label
                htmlFor={ `categoria-${category.id}` }
                className={ `cursor-pointer ${
                  selectedCategory === category.id ? 'font-bold' : ''
                }` }
              >
                {category.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

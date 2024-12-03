import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { Category, CategoryProps } from '../Types';

export default function Categories({ onChange }: CategoryProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

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
                onClick={ () => onChange(category.id) }
              />
              <label
                data-testid="category"
                htmlFor={ `categoria-${category.id}` }
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

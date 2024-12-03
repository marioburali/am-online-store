import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';

function ProductCard(product: Product) {
  const { id, title, thumbnail, price } = product;
  return (
    (
      <NavLink to={ `/product/${createURLSlug(title)}` } state={ { product } }>
        <div data-testid="product" id={ id }>
          <p>{title}</p>
          <img src={ thumbnail } alt={ thumbnail } />
          <p>{price}</p>
        </div>
      </NavLink>
    )
  );
}

export default ProductCard;

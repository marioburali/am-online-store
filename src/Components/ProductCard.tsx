import React from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import AddToCart from './AddToCart';

function ProductCard(product: Product) {
  const { id, title, thumbnail, price } = product;
  return (
    (
      <NavLink
        data-testid="product-detail-link"
        to={ `/product/${createURLSlug(title)}` }
        state={ { product } }
      >
        <div data-testid="product" id={ id }>
          <p>{title}</p>
          <img src={ thumbnail } alt={ thumbnail } />
          <p>{price}</p>
        </div>
        <AddToCart datatestid="product-add-to-cart" product={ product } />
      </NavLink>
    )
  );
}

export default ProductCard;

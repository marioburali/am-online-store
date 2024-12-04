import React from 'react';
import { Product } from '../Types';

function ProductCard(product: Product) {
  const { id, title, thumbnail, price } = product;
  return (
    (
      <div data-testid="product" id={ id }>
        <p>{title}</p>
        <img src={ thumbnail } alt={ thumbnail } />
        <p>{price}</p>
      </div>
    )
  );
}

export default ProductCard;

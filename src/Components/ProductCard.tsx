import React from 'react';
import { Product } from '../Types';

function ProductCard(product: Product) {
  const { id, title, thumbnail, price } = product;
  return (
    (
      <div data-testid="product" id={ id }>
        <p data-testid="product-detail-name">{title}</p>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ thumbnail } />
        <p data-testid="product-detail-price">{price}</p>
      </div>

    )
  );
}

export default ProductCard;

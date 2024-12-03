import React from 'react';
import { CardProps } from '../Types';

function ProductCard({ key, title, thumbnail, price }: CardProps) {
  return (
    (
      <div key={ key } data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={ thumbnail } />
        <p>{price}</p>
      </div>
    )
  );
}

export default ProductCard;

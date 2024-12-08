'use client';

import React, { useState, useEffect } from 'react';
import { AddToCartProps } from '../Types';
import { Button } from './ui/button';
import useCart from '../hooks/useCart';

function AddToCart({ product }: AddToCartProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <Button
      variant={ isAdded ? 'success' : 'gradient' }
      onClick={ handleClick }
      className={ `buttonCart w-full ${isAdded ? 'disabled:opacity-100 disabled:cursor-not-allowed' : ''}` }
      disabled={ isAdded }
    >
      {isAdded ? 'Item Adicionado' : 'Adicionar ao carrinho'}
    </Button>
  );
}

export default AddToCart;

'use client';

import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
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
      className={ `buttonCart w-full transition-all duration-300 ${isAdded ? 'disabled:opacity-100 disabled:cursor-not-allowed' : ''}` }
      disabled={ isAdded }
    >
      {isAdded ? (
        <div className="flex justify-evenly grow">
          <p>Item Adicionado</p>
          <FaCheck />
        </div>
      ) : 'Adicionar ao carrinho'}
    </Button>
  );
}

export default AddToCart;

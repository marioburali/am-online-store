import React from 'react';
import { AddToCartProps } from '../Types';
import { GradientButton } from './ui/button';

function AddToCart({ datatestid, product }: AddToCartProps) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const { id } = product;
    const getCart = localStorage.getItem('cart');
    const cart = getCart ? JSON.parse(getCart) : {};

    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <GradientButton
      data-testid={ datatestid }
    >
      Adiciona ao carrinho
    </GradientButton>
  );
}

export default AddToCart;

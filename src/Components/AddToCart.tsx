import React from 'react';
import { AddToCartProps, CartType } from '../Types';
import { useCartContext } from '../context/CartContext';

function AddToCart({ datatestid, product }: AddToCartProps) {
  // const { setCartLength } = useCart();
  const { setCartLength } = useCartContext();
  function addToCart() {
    const { id } = product;
    const getCartItems = localStorage.getItem('cart');
    const cart = getCartItems ? JSON.parse(getCartItems) as CartType : {};

    const getCartLength = localStorage.getItem('cartsize');
    const cartSize = getCartLength ? JSON.parse(getCartLength) : 0;

    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = { ...product, quantity: 1 };
      localStorage.setItem('cartsize', JSON.stringify(cartSize + 1));
      setCartLength((prevState) => prevState + 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    addToCart();
  }
  return (
    <button
      data-testid={ datatestid }
      onClick={ handleClick }
    >
      Adiciona ao carrinho
    </button>
  );
}

export default AddToCart;

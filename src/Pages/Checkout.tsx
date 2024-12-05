import React, { useEffect, useState } from 'react';
import { Product } from '../Types';
import PaymentForm from '../Components/PaymentForm';
import ProductsList from '../Components/ProductsList';

function Checkout() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    const cartItems = getCart ? JSON.parse(getCart) : {};

    setCart(Object.values(cartItems));
  }, []);

  return (
    <main>
      <ProductsList isSearched products={ cart } />
      <PaymentForm />
    </main>
  );
}

export default Checkout;

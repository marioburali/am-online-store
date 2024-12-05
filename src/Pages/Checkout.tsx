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
      <div data-testid="checkout-products">
        {/* {cart.map((item) => (
          <p key={ item.id }>{item.title}</p>
        ))} */}
        <ProductsList isSearched products={ cart } />
      </div>
      <PaymentForm />
    </main>
  );
}

export default Checkout;

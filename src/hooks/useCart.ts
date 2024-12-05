import { useEffect, useState } from 'react';
import { CartType } from '../Types';

function useCart() {
  const [cart, setCart] = useState<CartType>({});

  function getCart() {
    const getCartItems = localStorage.getItem('cart');
    return getCartItems ? JSON.parse(getCartItems) as CartType : {};
  }

  useEffect(() => {
    setCart(getCart());
  }, []);

  return { cart, setCart };
}
export default useCart;

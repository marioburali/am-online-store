// CartContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartContextType, CartType } from '../Types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartType>({});
  const [cartLength, setCartLength] = useState(0);

  function getCart() {
    const getCartItems = localStorage.getItem('cart');
    return getCartItems ? JSON.parse(getCartItems) as CartType : {};
  }

  function getCartSize() {
    const getCartLength = localStorage.getItem('cartsize');
    return getCartLength ? JSON.parse(getCartLength) : 0;
  }

  useEffect(() => {
    setCart(getCart());
    setCartLength(getCartSize());
  }, []);

  const value = { cartLength, setCartLength, cart, setCart, getCartSize };

  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

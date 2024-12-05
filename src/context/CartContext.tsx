// CartContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartContextType {
  cartLength: number;
  setCartLength: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    const getCartSize = localStorage.getItem('cartsize');
    const cartSize = getCartSize ? JSON.parse(getCartSize) : 0;
    setCartLength(cartSize);
  }, []);

  return (
    <CartContext.Provider value={ { cartLength, setCartLength } }>
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

// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../Types';

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isSearched: boolean;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const value = { products, setProducts, isSearched, setIsSearched };

  return (
    <ProductContext.Provider value={ value }>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a ProductProvider');
  }
  return context;
};

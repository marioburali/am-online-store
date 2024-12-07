// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../Types';

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={ { products, setProducts } }>
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

// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../Types';
import { initialProduct } from '../helpers/initialProduct';

interface ProductContextType {
  product: Product;
  saveProduct: (item: Product) => void;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isSearched: boolean;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product>(initialProduct);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const saveProduct = (item: Product) => {
    setProduct(item);
    localStorage.setItem('product', JSON.stringify(item));
  };

  const value = { product, saveProduct, setProduct, products, setProducts, isSearched, setIsSearched };

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

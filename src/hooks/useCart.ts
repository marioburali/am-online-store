import { useState } from 'react';
import { CartType } from '../Types';

function useCart() {
  const [cart, setCart] = useState<CartType>({});

  return { cart, setCart };
}
export default useCart;

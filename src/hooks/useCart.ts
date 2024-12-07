import { CartType, Product } from '../Types';
import { useCartContext } from '../context/CartContext';

function useCart() {
  const { cart, setCart, cartLength, setCartLength } = useCartContext();

  const updateCart = (updatedCart: CartType) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const updateCartLength = (newLength: number) => {
    localStorage.setItem('cartsize', JSON.stringify(newLength));
    setCartLength(newLength);
  };

  const addToCart = (product: Product) => {
    const { id } = product;
    const updatedCart = { ...cart };

    if (updatedCart[id]) {
      updatedCart[id].quantity += 1;
    } else {
      updatedCart[id] = { ...product, quantity: 1 };
    }

    updateCart(updatedCart);
    updateCartLength(cartLength + 1);
  };

  const incrementQuantity = (id: string) => {
    const updatedCart = { ...cart };
    updatedCart[id].quantity += 1;

    updateCart(updatedCart);
    updateCartLength(cartLength + 1);
  };

  const decrementQuantity = (id: string) => {
    const updatedCart = { ...cart };
    if (updatedCart[id].quantity > 1) {
      updatedCart[id].quantity -= 1;
      updateCartLength(cartLength - 1);
    } else {
      delete updatedCart[id];
      updateCartLength(cartLength - 1);
    }
    updateCart(updatedCart);
  };

  const removeProduct = (id: string) => {
    const updatedCart = { ...cart };
    const { quantity } = updatedCart[id];
    delete updatedCart[id];

    updateCart(updatedCart);
    updateCartLength(cartLength - quantity);
  };

  return { cart, addToCart, incrementQuantity, decrementQuantity, removeProduct };
}

export default useCart;

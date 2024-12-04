import { useEffect, useState } from 'react';
import { Product } from '../Types';

function Cart() {
  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    const cart = getCart ? JSON.parse(getCart) : {};

    setCart(Object.values(cart));
  }, []);

  const [cart, setCart] = useState<Product[]>([]);
  return (cart.length === 0 ? (
    <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
  )
    : (cart.map(({ title, price, id, thumbnail, quantity }) => (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ thumbnail } />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    )))

  );
}

export default Cart;

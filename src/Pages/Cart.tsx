import { useEffect, useState } from 'react';
import { CartType } from '../Types';

function Cart() {
  const [cart, setCart] = useState<CartType>({});

  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    const cartItems = getCart ? JSON.parse(getCart) : {};
    setCart(cartItems);
  }, []);

  const updateCart = (updatedCart: CartType) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const incrementQuantity = (id: string) => {
    const updatedCart = { ...cart };
    updatedCart[id].quantity += 1;
    updateCart(updatedCart);
  };

  const decrementQuantity = (id: string) => {
    const updatedCart = { ...cart };
    if (updatedCart[id].quantity > 1) {
      updatedCart[id].quantity -= 1;
    } else {
      updatedCart[id].quantity = 1;
    }
    updateCart(updatedCart);
  };

  const removeProduct = (id: string) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    updateCart(updatedCart);
  };

  return (Object.values(cart).length === 0 ? (
    <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
  )
    : (Object.values(cart).map(({ title, price, id, thumbnail, quantity }) => (
      <div key={ id }>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ thumbnail } />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <div>
          <button
            onClick={ () => decrementQuantity(id) }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button
            onClick={ () => incrementQuantity(id) }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={ () => removeProduct(id) }
          data-testid="remove-product"
        >
          Remover
        </button>
      </div>

    )))

  );
}

export default Cart;

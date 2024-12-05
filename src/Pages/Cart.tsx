import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../Types';

function Cart() {
  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    const cart = getCart ? JSON.parse(getCart) : {};
    console.log(cart);

    setCart(Object.values(cart));
  }, []);

  const updateLocalStorage = (updatedCart: Product[]) => {
    const cartObject = updatedCart.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {} as { [key: string]: Product });
    localStorage.setItem('cart', JSON.stringify(cartObject));
  };

  const incrementQuantity = (id: string) => {
    const updatedCart = cart.map((product) => (product.id === id
      ? { ...product, quantity: product.quantity + 1 }
      : product));
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    console.log(updatedCart);
  };

  const decrementQuantity = (id: string) => {
    const updatedCart = cart.map((product) => (product.id === id
      ? { ...product, quantity: Math.max(1, product.quantity - 1) }
      : product));
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const removeProduct = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const [cart, setCart] = useState<Product[]>([]);
  console.log(`aqui é o carrinho: ${cart}`);

  return (cart.length === 0 ? (
    <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
  ) : (
    <div>
      {cart.map(({ title, price, id, thumbnail, quantity }) => (
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

      ))}
      <NavLink data-testid="checkout-products" to="/checkout">Pagamento</NavLink>
    </div>
  )

  );
}

export default Cart;

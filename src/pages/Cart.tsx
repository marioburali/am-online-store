import { NavLink } from 'react-router-dom';
import { CartType } from '../Types';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { cart, setCart } = useCartContext();

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

  return (Object.values(cart).length === 0 ? (<h2>Seu carrinho está vazio</h2>)
    : (
      <div>
        {Object.values(cart).map(({ title, price, id, thumbnail, quantity }) => (
          <div key={ id }>
            <p>{title}</p>
            <img src={ thumbnail } alt={ thumbnail } />
            <p>{price}</p>
            <p>{quantity}</p>
            <div>
              <button onClick={ () => decrementQuantity(id) }>-</button>
              <button onClick={ () => incrementQuantity(id) }>+</button>
            </div>
            <button onClick={ () => removeProduct(id) }>Remover</button>
          </div>

        ))}
        <NavLink to="/checkout">Pagamento</NavLink>
      </div>
    )

  );
}

export default Cart;

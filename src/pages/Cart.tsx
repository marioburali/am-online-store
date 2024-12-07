import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import useCart from '../hooks/useCart';

function Cart() {
  const { cart } = useCartContext();
  const { decrementQuantity, incrementQuantity, removeProduct } = useCart();

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

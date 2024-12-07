import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import useCart from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/helpers/formatPrice';

function Cart() {
  const { cart } = useCartContext();
  const { decrementQuantity, incrementQuantity, removeProduct } = useCart();

  return (Object.values(cart).length === 0 ? (<h2>Seu carrinho está vazio</h2>)
    : (
      <div className="container mx-auto flex justify-center ">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-6 text-center" style={ { margin: '20px 0px' } }>Carrinho</h1>
          <div className="w-full max-w-4xl">
            {Object.values(cart).map(({ title, price, id, thumbnail, quantity }) => (
              <div key={ id } className="flex justify-between items-center mb-4">
                <p className="font-medium">{title}</p>
                <img src={ thumbnail } alt={ thumbnail } />
                <p className="font-medium">
                  R$&nbsp;
                  {formatPrice((price * quantity))}
                </p>
                <div className="justify-center" style={ { display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0px' } }>
                  <Button variant="secondary" onClick={ () => decrementQuantity(id) }>-</Button>
                  <p className="font-medium">{quantity}</p>
                  <Button variant="secondary" onClick={ () => incrementQuantity(id) }>+</Button>
                  <Button variant="destructive" onClick={ () => removeProduct(id) }>Remover</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-between">
            <NavLink to="/">
              <Button variant="secondary">Conferir Mais Produtos</Button>
            </NavLink>
            <NavLink to="/checkout">
              <Button variant="gradient">Comprar</Button>
            </NavLink>
          </div>
        </div>
      </div>
    )

  );
}

export default Cart;

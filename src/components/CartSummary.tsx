import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { CartType, Product } from '../Types';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../helpers/formatPrice';

export default function CartSummary() {
  const [cartItems, setCartItems] = useState<CartType>({});
  const [total, setTotal] = useState(0);
  const { cartLength } = useCartContext();

  useEffect(() => {
    const getCartItems = localStorage.getItem('cart');
    const cart = getCartItems ? JSON.parse(getCartItems) as CartType : {};
    setCartItems(cart);

    const cartTotal = Object.values(cart).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(cartTotal);
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Produtos (
          {cartLength}
          )
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          {Object.values(cartItems).map((item: Product & { quantity: number }) => (
            <div key={ item.id } className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={ item.thumbnail } alt="" width="48" height="48" className="mr-3 rounded-md object-cover" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    Quantidade:
                    {' '}
                    {item.quantity}
                  </p>
                </div>
                <p className="text-sm">
                  R$&nbsp;
                  {formatPrice((item.price * item.quantity))}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="mt-4 flex justify-between items-center font-bold">
          <p>Total:</p>
          <p>
            R$
            {' '}
            {formatPrice(total)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

import PaymentForm from '../components/PaymentForm';
import ProductsList from '../components/ProductsList';
import useCart from '../hooks/useCart';

function Checkout() {
  const { cart } = useCart();
  return (
    <main>
      <ProductsList isSearched products={ Object.values(cart) } showAddToCart={ false } />
      <PaymentForm />
    </main>
  );
}

export default Checkout;

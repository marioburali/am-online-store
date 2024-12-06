import PaymentForm from '../Components/PaymentForm';
import ProductsList from '../Components/ProductsList';
import useCart from '../hooks/useCart';

function Checkout() {
  const { cart } = useCart();
  return (
    <main>
      <ProductsList isSearched products={ Object.values(cart) } />
      <PaymentForm />
    </main>
  );
}

export default Checkout;

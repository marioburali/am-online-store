import PaymentForm from '../components/PaymentForm';
import CartSummary from '../components/CartSummary';

export default function Checkout() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CartSummary />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

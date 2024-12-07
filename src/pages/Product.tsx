import { useLocation } from 'react-router-dom';
import { Product as ProductType } from '../Types';
import ProductCard from '../components/ProductCard';
import AddToCart from '../components/AddToCart';

function Product() {
  const location = useLocation();
  const product = location.state.product as ProductType;
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <ProductCard { ...product } />
          <AddToCart product={ product } />
        </div>
      </main>
    </div>
  );
}

export default Product;

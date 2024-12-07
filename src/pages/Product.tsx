import ProductCard from '../components/ProductCard';
import AddToCart from '../components/AddToCart';
import { useProductContext } from '../context/ProductContext';

function Product() {
  const { product } = useProductContext();
  if (!product) return <h1>Produto não encontrado</h1>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <ProductCard product={ product } />
          <AddToCart product={ product } />
        </div>
      </main>
    </div>
  );
}

export default Product;

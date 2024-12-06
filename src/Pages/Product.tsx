import { useLocation, NavLink } from 'react-router-dom';
import { Product as ProductType } from '../Types';
import ProductCard from '../Components/ProductCard';
import AddToCart from '../Components/AddToCart';
import CartIcon from '../Components/CartIcon/CartIcon';

function Product() {
  const location = useLocation();
  const product = location.state.product as ProductType;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-[#0B62FF] to-[#2D8CFF] text-white shadow-md p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-end items-center">
          <NavLink
            to="/cart"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <CartIcon />
          </NavLink>
        </div>
      </header>
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

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
      <header className= "bg-gradient-to-r from-[#0B62FF] to-[#2D8CFF] text-white shadow-md p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <NavLink
              to="/cart"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              <CartIcon />
            </NavLink>
          </div>
        </div>
      </header>
      <main>
        <div>
          <ProductCard { ...product } />
          <AddToCart product={ product } />
        </div>
      </main>
    </div>
  );
}

export default Product;

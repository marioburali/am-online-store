import { useLocation, NavLink } from 'react-router-dom';
import { Product as ProductType } from '../Types';
import ProductCard from '../Components/ProductCard';
import AddToCart from '../Components/AddToCart';
import CartIcon from '../Components/CartIcon/CartIcon';

function Product() {
  const location = useLocation();
  const product = location.state.product as ProductType;
  return (
    <main>
      <div>
        <CartIcon />
        <ProductCard
          data-testid="product"
          { ...product }
        />
        <AddToCart datatestid="product-detail-add-to-cart" product={ product } />
        <NavLink to="/cart" data-testid="shopping-cart-button">Carrinho</NavLink>
      </div>
    </main>
  );
}

export default Product;

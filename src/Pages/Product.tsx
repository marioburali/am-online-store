import { useLocation, NavLink } from 'react-router-dom';
import { Product as ProductType } from '../Types';
import ProductCard from '../Components/ProductCard';

function Product() {
  const location = useLocation();
  const product = location.state.product as ProductType;
  return (
    <main>
      <div>
        <ProductCard
          data-testid="product"
          { ...product }
        />

        <NavLink to="/cart" data-testid="shopping-cart-button">Carrinho</NavLink>
      </div>
    </main>
  );
}

export default Product;

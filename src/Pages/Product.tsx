import { useLocation, NavLink } from 'react-router-dom';
import { Product as ProductType } from '../Types';
import ProductCard from '../Components/ProductCard';
import AddToCart from '../Components/AddToCart';

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
        <p data-testid="product-detail-price">{product.price}</p>
        <AddToCart datatestid="product-detail-add-to-cart" product={ product } />
        <NavLink to="/cart" data-testid="shopping-cart-button">Carrinho</NavLink>
      </div>
    </main>
  );
}

export default Product;

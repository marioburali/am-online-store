import { useLocation, NavLink } from 'react-router-dom';
import { Product as ProductType } from '../Types';

function Product() {
  const location = useLocation();
  const product = location.state.product as ProductType;
  return (
    <main>
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <img
          data-testid="product-detail-image"
          src={ product.thumbnail }
          alt={ product.thumbnail }
        />
        <p data-testid="product-detail-price">{product.price}</p>
        <NavLink to="/cart" data-testid="shopping-cart-button">Carrinho</NavLink>
      </div>
    </main>
  );
}

export default Product;

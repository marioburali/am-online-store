import { NavLink } from 'react-router-dom';
import { ProductsListProps } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import ProductCard from './ProductCard';
import AddToCart from './AddToCart';

function ProductsList({ products, isSearched }: ProductsListProps) {
  return products.length > 0
    ? (products.map((product) => (
      <NavLink
        data-testid="product-detail-link"
        to={ `/product/${createURLSlug(product.title)}` }
        state={ { product } }
        key={ product.id }
      >
        <ProductCard { ...product } />
        <AddToCart datatestid="product-add-to-cart" product={ product } />
      </NavLink>)))
    : (isSearched && <h2>Nenhum produto foi encontrado</h2>);
}

export default ProductsList;

import { NavLink } from 'react-router-dom';
import { ProductsListProps } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import ProductCard from './ProductCard';
import AddToCart from './AddToCart';
import { useProductContext } from '../context/ProductContext';

function ProductsList({ isSearched, showAddToCart = true }: ProductsListProps) {
  const { products } = useProductContext();
  return products.length > 0
    ? (products.map((product) => (
      <NavLink
        to={ `/product/${createURLSlug(product.title)}` }
        state={ { product } }
        key={ product.id }
      >
        <div className="card hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
          <ProductCard { ...product } isDetailedView={ false } />
          {showAddToCart && (<AddToCart product={ product } />)}
        </div>
      </NavLink>)))
    : (isSearched && <h2>Nenhum produto foi encontrado</h2>);
}

export default ProductsList;

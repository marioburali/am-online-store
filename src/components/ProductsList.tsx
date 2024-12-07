import { NavLink } from 'react-router-dom';
import { ProductsListProps } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import ProductCard from './ProductCard';
import AddToCart from './AddToCart';
import { useProductContext } from '../context/ProductContext';

function ProductsList({ showAddToCart = true }: ProductsListProps) {
  const { products, isSearched, saveProduct } = useProductContext();
  return products.length > 0
    ? (products.map((product) => (
      <NavLink
        to={ `/product/${createURLSlug(product.title)}` }
        key={ product.id }
      >
        <div
          onClick={ () => saveProduct(product) }
          className="card hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <ProductCard product={ product } isDetailedView={ false } />
          {showAddToCart && (<AddToCart product={ product } />)}
        </div>
      </NavLink>)))
    : (isSearched && <h2>Nenhum produto foi encontrado</h2>);
}

export default ProductsList;

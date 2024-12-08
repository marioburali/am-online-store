import { NavLink } from 'react-router-dom';
import { ProductsListProps } from '../Types';
import { createURLSlug } from '../helpers/createURLSlug';
import ProductCard from './ProductCard';
import AddToCart from './AddToCart';
import { useProductContext } from '../context/ProductContext';

function ProductsList({ showAddToCart = true }: ProductsListProps) {
  const { products, isSearched, saveProduct } = useProductContext();
  if (products.length === 0 && isSearched) {
    return <h2>Nenhum produto foi encontrado</h2>;
  }
  return (
    products.map((product) => (
      <NavLink
        to={ `/product/${createURLSlug(product.title)}` }
        key={ product.id }
        onClick={ () => saveProduct(product) }
      >
        <div className="card hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
          <ProductCard product={ product } isDetailedView={ false } />
          {showAddToCart && (<AddToCart product={ product } />)}
        </div>
      </NavLink>))
  );
}

export default ProductsList;

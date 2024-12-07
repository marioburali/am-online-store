import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Comment, ProductCardProps } from '../Types';
import RatingAndComment from './RatingAndComment';
import { formatPrice } from '../helpers/formatPrice';

function ProductCard({ product, isDetailedView = true }: ProductCardProps) {
  const [, setComments] = useState<Comment[]>([]);
  const { id, thumbnail, title, price, shipping: { free_shipping: shipping } } = product;

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(id) || '[]');
    setComments(savedReviews);
  }, [id]);

  return (
    <div id={ id } className="singleCard">
      <img className="cardImg" src={ thumbnail } alt={ thumbnail } />
      <h3 className="text-left line-clamp-2 overflow-hidden text-ellipsis">
        {title}
      </h3>
      <h2 className="text-center font-bold">
        R$
        {' '}
        {formatPrice(price)}
      </h2>
      {shipping && (
        <div className="text-white rounded-full bg-green-700 flex items-center justify-center" style={ { width: '40%' } }>
          <MdLocalShipping className="mr-2" />
          <p className="text-sm">Frete Grátis</p>
        </div>
      )}

      {isDetailedView && <RatingAndComment productId={ id } />}
    </div>
  );
}

export default ProductCard;

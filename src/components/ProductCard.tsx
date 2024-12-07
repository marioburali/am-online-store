import { useEffect, useState } from 'react';
import { Comment, Product } from '../Types';
import RatingAndComment from './RatingAndComment';
import { formatPrice } from '@/helpers/formatPrice';

interface ProductCardProps extends Product {
  isDetailedView?: boolean;
}

function ProductCard({ id,
  title,
  thumbnail,
  price,
  isDetailedView = true }: ProductCardProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(id) || '[]');
    setComments(savedReviews);
  }, [id]);

  return (
    <div id={ id }>
      <img className="cardImg" src={ thumbnail } alt={ thumbnail } />
      <h3 className="text-left line-clamp-2 overflow-hidden text-ellipsis">
        {title}
      </h3>
      <h2 className="text-center font-bold">
        R$
        {' '}
        {formatPrice(price)}
      </h2>

      {isDetailedView && <RatingAndComment productId={ id } />}
    </div>
  );
}

export default ProductCard;

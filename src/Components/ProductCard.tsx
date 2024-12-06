import { useEffect, useState } from 'react';
import { Comment, Product } from '../Types';
import RatingAndComment from './RatingAndComment';

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
      <h1>{title}</h1>
      <img className="cardImg" src={ thumbnail } alt={ thumbnail } />
      <h2>
        R$
        {' '}
        {price}
      </h2>

      {isDetailedView && <RatingAndComment productId={ id } />}
    </div>
  );
}

export default ProductCard;

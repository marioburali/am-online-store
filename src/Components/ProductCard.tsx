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
    <div data-testid="product" id={ id }>
      <p data-testid="product-detail-name">{title}</p>
      <img data-testid="product-detail-image" src={ thumbnail } alt={ thumbnail } />
      <p data-testid="product-detail-price">{price}</p>

      {isDetailedView && <RatingAndComment productId={ id } />}

      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={ index }>
            <p data-testid="review-card-email">{comment.email}</p>
            <p data-testid="review-card-evaluation">{comment.text}</p>
            <p data-testid="review-card-rating">{comment.rating}</p>
          </div>
        ))
      ) : (
        <h2>Nenhuma avaliação encontrada</h2>
      )}
    </div>
  );
}

export default ProductCard;

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
      <p>{title}</p>
      <img src={ thumbnail } alt={ thumbnail } />
      <p>{price}</p>

      {isDetailedView && <RatingAndComment productId={ id } />}

      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={ index }>
            <p>{comment.email}</p>
            <p>{comment.text}</p>
            <p>{comment.rating}</p>
          </div>
        ))
      ) : (
        <h2>Nenhuma avaliação encontrada</h2>
      )}
    </div>
  );
}

export default ProductCard;

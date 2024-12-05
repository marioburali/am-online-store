import { useState, useEffect } from 'react';
import { validateEmail } from '../helpers/validate';

export default function RatingAndComment({ productId }: { productId: string }) {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState<{
    email: string;
    text: string;
    rating: string }[]>(
    [],
  );

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(productId) || '[]');
    setReviews(savedReviews);
  }, [productId]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email) || !rating) {
      setError('Campos inválidos');
      return;
    }

    const newReview = { email, text, rating };

    const savedReviews = JSON.parse(localStorage.getItem(productId) || '[]');

    savedReviews.push(newReview);

    localStorage.setItem(productId, JSON.stringify(savedReviews));

    setReviews(savedReviews);
    setEmail('');
    setText('');
    setRating('');
    setError('');
  };

  return (
    <div>
      <h1>Rating and Comment</h1>
      <form noValidate onSubmit={ handleSubmit }>
        {error && <p data-testid="error-msg">{error}</p>}

        <label htmlFor="email-id">
          <input
            type="email"
            name="email"
            id="email-id"
            data-testid="product-detail-email"
            value={ email }
            onChange={ handleEmailChange }
            placeholder="Email"
            required
          />
        </label>

        <div>
          <p>Avaliação:</p>
          {[1, 2, 3, 4, 5].map((index) => (
            <label
              key={ index }
              htmlFor={ `rating-${index}` }
              data-testid={ `${index}-rating` }
            >
              <input
                type="radio"
                name="rating"
                id={ `rating-${index}` }
                value={ index }
                checked={ rating === `${index}` }
                onChange={ handleRatingChange }
              />
              {index}
            </label>
          ))}
        </div>

        <label htmlFor="text-area-id">
          <p>Comentário:</p>
          <textarea
            name="text"
            id="text-area-id"
            value={ text }
            onChange={ handleTextChange }
            placeholder="Deixe seu comentário"
            data-testid="product-detail-evaluation"
          />
        </label>

        <button type="submit" data-testid="submit-review-btn">Enviar</button>
      </form>

      <div>
        <h2>Avaliações:</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={ index }>
              <p>{review.email}</p>
              <p>{review.text}</p>
              <p>{review.rating}</p>
            </div>
          ))
        ) : (
          <p>Nenhuma avaliação ainda.</p>
        )}
      </div>
    </div>
  );
}


import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { title, author, rating, description, category, image } = book;

  return (
    <div className="book-card">
      {image && <img src={image} alt={title} className="book-image" />}
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p>{description.slice(0, 100)}...</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};


export default BookCard;

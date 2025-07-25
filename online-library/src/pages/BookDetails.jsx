import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p>{book.description}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;

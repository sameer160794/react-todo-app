import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const popularBooks = books.filter((book) => book.rating >= 4.5);

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Romance'];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <div className='categories'>
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`}>{cat}</Link>
        ))}
      </div>

      <h2>Popular Books</h2>
      {popularBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;

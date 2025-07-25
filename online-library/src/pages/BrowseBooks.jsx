import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  const filtered = books.filter((book) => {
    const inCategory = category === 'All' || book.category === category;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return inCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Browse: {category}</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filtered.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BrowseBooks;

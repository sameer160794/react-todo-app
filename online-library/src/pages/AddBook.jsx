import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category || !form.rating || !form.description) {
      alert('Please fill all fields');
      return;
    }

    dispatch(addBook(form));
    navigate('/books/All');
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="rating" placeholder="Rating (e.g. 4.5)" value={form.rating} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

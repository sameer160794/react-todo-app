import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav >
    <Link to="/">Home</Link> | <Link to="/books/All">Browse Books</Link> | <Link to="/add">Add Book</Link>
  </nav>
);

export default Navbar;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
    id: 1,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    rating: 4.7,
    description: "A stranded astronaut fights to survive on Mars after being presumed dead.",
    image: "https://covers.openlibrary.org/b/id/8379781-L.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    rating: 4.6,
    description: "A guide to building good habits and breaking bad ones through small changes.",
    image: "https://covers.openlibrary.org/b/id/10525887-L.jpg"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    rating: 4.4,
    description: "A classic romantic novel of manners set in 19th century England.",
    image: "https://covers.openlibrary.org/b/id/10210457-L.jpg"
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    rating: 4.5,
    description: "A complex tale of politics, religion, and ecology on a desert planet.",
    image: "https://covers.openlibrary.org/b/id/8279256-L.jpg"
  },
  {
    id: 5,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    rating: 4.8,
    description: "The deeply personal memoir of the former First Lady of the United States.",
    image: "https://covers.openlibrary.org/b/id/8755657-L.jpg"
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    rating: 4.7,
    description: "A memoir about a woman who grew up without formal education and eventually earned a PhD.",
    image: "https://covers.openlibrary.org/b/id/10504132-L.jpg"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    rating: 4.9,
    description: "A powerful novel about racial injustice in the Deep South.",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    rating: 4.6,
    description: "A dystopian novel about totalitarian government surveillance and control.",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    rating: 4.7,
    description: "An exploration of the history and impact of Homo sapiens on the world.",
    image: "https://covers.openlibrary.org/b/id/8679311-L.jpg"
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fiction",
    rating: 4.8,
    description: "The adventures of Bilbo Baggins as he journeys to reclaim a treasure from a dragon.",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  }
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: Date.now() });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

import React, { useEffect, useState } from 'react';
import Book from './Book';
import './Book.css';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/books');
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  if (books === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li className="book" key={book._id}>
              <Book book={book} />
            </li>
          ))
        ) : (
          <div>No books available</div>
        )}
      </ul>
    </div>
  );
};

export default Books;

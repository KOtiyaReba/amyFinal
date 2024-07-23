import { Button } from '@mui/material';
import React from 'react';
import './Book.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const navigate = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5001/books/${_id}`);
      window .location.reload(true)
      // navigate('/books');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button component={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>Update</Button>
      <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>Delete</Button>
    </div>
  );
};

export default Book;

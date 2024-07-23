import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/books/${id}`);
        setInputs(response.data.book);
        setChecked(response.data.book.availability);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5001/books/${id}`, { ...inputs, availability: checked });
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <Box component="form" onSubmit={updateHandler}>
      <TextField
        fullWidth
        label="Name"
        value={inputs.name || ''}
        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
      />
      <TextField
        fullWidth
        label="Author"
        value={inputs.author || ''}
        onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
      />
      <TextField
        fullWidth
        label="Description"
        value={inputs.description || ''}
        onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
      />
      <TextField
        fullWidth
        label="Price"
        type="number"
        value={inputs.price || ''}
        onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label="Available"
      />
      <TextField
        fullWidth
        label="Image URL"
        value={inputs.image || ''}
        onChange={(e) => setInputs({ ...inputs, image: e.target.value })}
      />
      <Button type="submit">Update Book</Button>
    </Box>
  );
};

export default BookDetail;

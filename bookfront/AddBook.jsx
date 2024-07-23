import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Box } from "@mui/system";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: ""
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5001/books", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      availability: Boolean(checked)
    }).then(res => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/books'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>NAME</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
        <FormLabel>AUTHOR</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
        <FormLabel>DESCRIPTION</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
        <FormLabel>PRICE</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name='price' />
        <FormLabel>IMAGE</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
        {/* This is the part that caused the error. Changed 'Checked' to 'checked'. */}
        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="AVAILABLE" />
        <Button variant='contained' type='submit'>Add Book</Button>
      </Box>
    </form>
  );
};

export default AddBook;
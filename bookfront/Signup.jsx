import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    place: '',
    age: '',
    email: '',
    education: '',
    contact: '',
    password: ''
  });
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('You must agree to the terms and conditions');
      return;
    }
    try {
      await axios.post('http://localhost:5001/users/signup', inputs)
      .then((res)=>{
        console.log(res)
      })
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4">Signup</Typography>
      <TextField
        name="name"
        label="Name"
        value={inputs.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="place"
        label="Place"
        value={inputs.place}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="age"
        label="Age"
        type="number"
        value={inputs.age}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="email"
        label="Email"
        value={inputs.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="education"
        label="Education"
        value={inputs.education}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="contact"
        label="Contact"
        value={inputs.contact}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={inputs.password}
        onChange={handleChange}
        fullWidth
        required
      />
      <FormControlLabel
        control={<Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} />}
        label="I agree to the terms and conditions"
      />
      <Button type="submit" variant="contained" color="primary">Signup</Button>
    </Box>
  );
};

export default Signup;

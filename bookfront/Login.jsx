import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // url should include the route name also like users in this case
      const res = await axios.post('http://localhost:5001/users/login', inputs);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4">Login</Typography>
      <TextField
        name="email"
        label="Email"
        value={inputs.email}
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
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </Box>
  );
};

export default Login;

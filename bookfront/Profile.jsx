import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [booksRented, setBooksRented] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        try {
          const res = await axios.get(`http://localhost:5001/users/${userData.id}`);
          setUser(res.data);
          setBooksRented(res.data.booksRented.length);
        } catch (error) {
          console.error('Error fetching user data', error);
        }
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/users/${user.id}`, user);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
      <Typography variant="h4">Profile</Typography>
      <TextField
        name="name"
        label="Name"
        value={user.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="place"
        label="Place"
        value={user.place}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="age"
        label="Age"
        type="number"
        value={user.age}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="email"
        label="Email"
        value={user.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="education"
        label="Education"
        value={user.education}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="contact"
        label="Contact"
        value={user.contact}
        onChange={handleChange}
        fullWidth
        required
      />
      <Typography variant="body1">Books Rented: {booksRented}</Typography>
      <Button type="submit" variant="contained" color="primary">Update Profile</Button>
    </Box>
  );
};

export default Profile;

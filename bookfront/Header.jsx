import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar sx={{ backgroundColor: '#A78295' }} position='sticky'>
      <Toolbar>
        <NavLink to="/" style={{ color: 'white' }}>
          <Typography>
            <LibraryBooksRoundedIcon />
          </Typography>
        </NavLink>
        <Tabs
          sx={{ ml: 'auto' }}
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab LinkComponent={NavLink} to="/add" label='Add Book' />
          <Tab LinkComponent={NavLink} to="/books" label='Books' />
          {/* <Tab LinkComponent={NavLink} to="/about" label='About Us' /> */}
          <Tab LinkComponent={NavLink} to="/profile" label='Profile' />
          <Tab LinkComponent={NavLink} to="/logout" label='Logout' />
          <Tab LinkComponent={NavLink} to="/login" label='Login' />
          <Tab LinkComponent={NavLink} to="/signup" label='signup' />
        
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

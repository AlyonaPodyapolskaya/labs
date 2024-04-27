import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationLink = ({ to, primary }) => {
  return (
    <ListItemButton component={Link} to={to} sx={{ '&:hover': { backgroundColor: 'transparent', color: 'inherit', borderColor: 'white' }, border: '1px solid white' }}>
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

export default NavigationLink;
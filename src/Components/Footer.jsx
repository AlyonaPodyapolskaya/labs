import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Feedback from './Feedback';

const Footer = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            &copy; {new Date().getFullYear()}
          </Typography>
          <IconButton color="inherit" onClick={handleOpenForm}>
            <FeedbackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Feedback open={openForm} handleClose={handleCloseForm} />
    </div>
  );
};

export default Footer;

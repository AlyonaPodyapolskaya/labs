import React from "react";
import { Paper } from '@mui/material';

const Content = ({ children }) => {
    return (
      <Paper sx={{ backgroundColor: 'white', flexGrow: 1, marginTop: '30px', marginBottom: '30px', borderRadius: '20px', padding: '30px', marginLeft: '20px', marginRight: '20px', boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)', color: '#000' }}>
        {children}
      </Paper>
    );
  };

export default Content;
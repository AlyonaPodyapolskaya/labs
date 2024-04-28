import React from "react";
import { Paper } from '@mui/material';

const Content = ({ children }) => {
    return (
      <div style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto', 
        minHeight: '100vh',
        paddingTop: '64px', 
        padding: '20px',
      }}>
        <Paper sx={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
          color: '#000',
          overflow: 'auto',
          marginTop: '10vh', 
        }}>
          {children}
        </Paper>
      </div>
    );
  };

export default Content;

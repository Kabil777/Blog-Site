import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from '../profile/profile'; 

export default function MostFollowed() {
  return (
    <Box sx={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      width: '271px', 
      height: '251px', 
      padding: '16px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          textAlign: 'left',  // Align text to the left
          fontSize: '1rem',  // 14px to rem
          fontWeight: 'bold',  // Set font to bold
          marginBottom: '16px' // Adjust space between Typography and Profiles
        }}
      >
        MOST FOLLOWED
      </Typography>
      <Profile />
      <Profile />
      <Profile />
    </Box>
  );
}


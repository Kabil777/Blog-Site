import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from '../profile/profile'; 

export default function MostFollowed() {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '76%',
        height: '29%', 
        display: 'flex',
        flexDirection: 'column',
      
        alignItems: 'flex-start',
        padding: '1rem',
      }}
    > 
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          width: '100%',
        }}
      >
        <Typography  sx={{fontWeight:'bold',marginTop:'0.35rem', fontSize:'1.15rem', alignItems:'flex-start', textAlign: 'left',marginLeft:'1.15rem'}}>MOST FOLLOWED</Typography>
      
        <Profile sx={{ flex: 1 }} />
        <Profile sx={{ flex: 1 }} />
        <Profile sx={{ flex: 1 }} />
      </Box>
    </Box>
  );
}



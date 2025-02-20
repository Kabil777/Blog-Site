import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import {  Overview } from './AboutTab';
import "./AccountPage.css";

export default function LabTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="primary"
          sx={{ 
            '& .MuiTab-root': { color: 'black' }, 
            '& .Mui-selected': { color: '#2155cd' }, 
            '& .MuiTabs-indicator': { backgroundColor: '#2155cd' }
          }}
        >
          <Tab className="main" label="All Posts" />
          <Tab className="main" label="Following" />
          <Tab className="main" label="Bookmarks" />
          <Tab className="main" label="About" /> 
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', padding: 2}}>
        {value === 0 && <Typography>All Posts Content</Typography>}
        {value === 1 && <Typography>Following Content</Typography>}
        {value === 2 && <Typography>Bookmarks Content</Typography>}
        {value === 3 && <Overview />}
      </Box>
    </Box>
  );
}

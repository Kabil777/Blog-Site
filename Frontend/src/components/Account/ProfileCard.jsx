import { Avatar, Box, Typography, Button, Stack, Divider } from '@mui/material'
import React from 'react'
import Profile from '..//../assets/profile.png'
import { Edit } from './Edit'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import "./AccountPage.css"


export const ProfileCard = () => {
  return (
    <Box  display={'flex'} width={'851px'} gap={8} className='main'>
      <Box>
        <Avatar alt="Remy Sharp" src={Profile} sx={{ width: '190px', height: '190px' }} />
      </Box>
      <Box width={'597px'}>
        <Box display={'flex'} alignItems={'center'} flexDirection={'row'} justifyContent={'space-between'} width={'100%'} >
            <Typography variant='h4' className='main'>Kabil M</Typography>
            <Stack spacing={2} direction="row">
              <Edit/>
              <Button variant="contained" startIcon={<ShareOutlinedIcon sx={{height:'17px'}} />} className='main'>Share</Button>
            </Stack>
        </Box>
        <Box textAlign={'left'}>
          <Typography variant='body1' color='#2155CD' className='main'>UI/UX Developer</Typography>
          <Box display={'flex'} gap={1} >
            <Typography color='#2155CD' className='main'>@kabil</Typography>
            <Divider orientation="vertical" sx={{ borderBottomWidth: '10px',bgcolor:'#67676E'}} variant="middle" flexItem />
            <Typography color='#67676E' className='main'>100 Followers</Typography>
            <Divider orientation="vertical" sx={{ borderBottomWidth: '10px',bgcolor:'#67676E'}} variant="middle" flexItem />
            <Typography color='#67676E' className='main'>30 Posts</Typography>
          </Box>
          <Typography className='main'>Aspiring devops engineer fond at linux open source...</Typography>
          {/* Follow Button */}
          <Box border={'solid 2px black'} display={'inline'} height={'10px'} >Follow</Box>
        </Box>
      </Box>
    </Box>
  )
}
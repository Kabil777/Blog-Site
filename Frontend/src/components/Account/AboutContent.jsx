import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { Edit } from './Edit'
import "./AccountPage.css"

export const AboutContent = () => {
  return (
    <Box textAlign={'left'} display={'flex'} flexDirection={'column'} gap={5} >
      <Box border={'solid 2px #E4E4E7'} borderRadius={2}>
        <Box sx={{ display:'flex',justifyContent:'space-between', width:'877.05px'}} boxSizing={'border-box'}  paddingLeft={'40px'} paddingRight={'15px'} paddingTop={'10px'} paddingBottom={'10px'}>
          <Typography variant='h6' fontWeight={'bold'} className='main'>Personal Info</Typography>
          <Edit />
        </Box>
        <Divider/>
        <Box padding={'20px'} boxSizing={'border-box'} paddingLeft={'40px'} paddingRight={'50px'} paddingTop={'15px'} paddingBottom={'30px'} display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography color="text.secondary" className='main'>Full Name</Typography>
          <Typography className='main'>Kabil M</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography color="text.secondary" className='main'>Email</Typography>
          <Typography className='main'>Kabil@stackshare.com</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography color="text.secondary" className='main'>Website</Typography>
          <Typography sx={{textDecoration:'underline'}} className='main'>kabil.stackshare.com</Typography>
          </Box>
        </Box>
      </Box>
      {/* Second box */}
      <Box border={'solid 2px #E4E4E7'} borderRadius={2}>
        <Box sx={{ display:'flex',justifyContent:'space-between', width:'877.05px'}} boxSizing={'border-box'}  paddingLeft={'40px'} paddingRight={'15px'} paddingTop={'10px'} paddingBottom={'10px'}>
          <Typography variant='h6' fontWeight={'bold'} className='main'>Bio</Typography>
          <Edit />
        </Box>
        <Divider/>
        <Box padding={'20px'} boxSizing={'border-box'} paddingLeft={'40px'} paddingRight={'50px'} paddingTop={'15px'} paddingBottom={'30px'} display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography width={'90%'} className='main'>Aspiring devops engineer fond at linux open source...</Typography>
          </Box>
        </Box>
      </Box>
      {/* Third Box */}
      <Box display={'flex'} gap={6}>
        <Box border={'solid 2px #E4E4E7'} borderRadius={2} width={'413.02px'}>
          <Box sx={{ display:'flex',justifyContent:'space-between', width:'413.02px'}} boxSizing={'border-box'}  paddingLeft={'40px'} paddingRight={'15px'} paddingTop={'10px'} paddingBottom={'10px'}>
            <Typography variant='h6' fontWeight={'bold'} className='main'>Tech</Typography>
            <Edit />
          </Box>
          <Divider/>
          <Box padding={'20px'} boxSizing={'border-box'} paddingLeft={'40px'} paddingRight={'50px'} paddingTop={'15px'} paddingBottom={'30px'} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Box>Python</Box>
            <Box>Python</Box>
            <Box>Python</Box>
            </Box>
          </Box>
        </Box>
        {/* Fourth Box */}
        <Box border={'solid 2px #E4E4E7'} borderRadius={2} width={'413.02px'}>
          <Box sx={{ display:'flex',justifyContent:'space-between', width:'413.02px'}} boxSizing={'border-box'}  paddingLeft={'40px'} paddingRight={'15px'} paddingTop={'10px'} paddingBottom={'10px'}>
            <Typography variant='h6' fontWeight={'bold'} className='main'>Social Link</Typography>
            <Edit />
          </Box>
          <Divider/>
          <Box padding={'20px'} boxSizing={'border-box'} paddingLeft={'40px'} paddingRight={'50px'} paddingTop={'15px'} paddingBottom={'30px'} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Box>GitHub</Box>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

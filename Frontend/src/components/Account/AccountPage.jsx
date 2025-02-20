import { Box } from '@mui/material'
import React from 'react'
import { ProfileCard } from './ProfileCard'
import LabTabs from './UserDetails'
import "./AccountPage.css"

export const AccountPage = () => {
  return (
  <Box  display={'flex'} justifyContent={'center'}> 
    <Box alignItems={'center'} width="1006px" border={'solid 2px #E4E4E7'} borderRadius={5} 
        padding={3}>
      <Box  display={'flex'} justifyContent={'center'}>
        <ProfileCard />
      </Box>
      <Box className="main" padding={3} >
        <LabTabs/>
      </Box>
    </Box>
  </Box>
  )
}

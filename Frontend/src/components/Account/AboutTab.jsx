import { Box} from '@mui/material'
import React from 'react'
import { AboutContent } from './AboutContent'
import "./AccountPage.css"


export const Overview = () => {
  return (
    <Box>
        <Box width={'100%'}>
            <AboutContent/>
        </Box>
    </Box>
  )
}

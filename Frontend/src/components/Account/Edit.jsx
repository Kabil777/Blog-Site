import React from 'react'
import { Button } from '@mui/material'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const Edit = () => {
  return (
    <Button variant="outlined"  startIcon={<BorderColorOutlinedIcon sx={{height:'17px'}} />} sx={{color:"#67676E",borderColor:"#67676E"}} >
        Edit
    </Button>
  )
}






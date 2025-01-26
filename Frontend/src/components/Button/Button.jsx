import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFeatherAlt } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
export default function BasicButtons() {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="contained" startIcon={<FaFeatherAlt />} sx={{ fontWeight: 'bold', backgroundColor:'#2155CD' }}>Featured</Button>
      <Button variant="contained" startIcon={<IoMdTrendingUp />} sx={{ fontWeight: 'bold', backgroundColor: '#EEF5FF', color:'blue' ,width:"130px",height:"40px" }}>Trending</Button>
      <Button variant="contained" startIcon={<IoLogoPython />} sx={{ fontWeight: 'bold' , backgroundColor: '#EEF5FF', color:'blue'   }}>Python</Button>
	   
      <Button variant="contained" startIcon={<FaJava/>} sx={{ fontWeight: 'bold' , backgroundColor: '#EEF5FF', color:'blue'   }}>Java</Button>
      <Button variant="contained" startIcon={<FaHtml5/>} sx={{ fontWeight: 'bold' , backgroundColor: '#EEF5FF',color:'blue'   }}>HTML</Button>
	  
      <Button variant="contained" startIcon={<IoIosGitNetwork />} sx={{ fontWeight: 'bold', backgroundColor: '#EEF5FF', color:'blue'   }}>Outlined</Button>
	  
      <Button variant="contained" startIcon={<FaCloudUploadAlt />} sx={{ fontWeight: 'bold' , backgroundColor: '#EEF5FF', color:'blue'  }}>Outlined</Button>
	  
	  
    </Stack>
  );
}


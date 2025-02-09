import React from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

export default function CompFollow({ index }) {
	const buttons = [
		{ label: "FOLLOW", icon: <IoMdAdd /> },
	];
	const button = buttons[index];

	return (
		<Button
			key={index}
			size="small"
			variant="contained"
			startIcon={button.icon}
			sx={{color: "#339933",backgroundColor: "#d9ffb3", 
		        	  fontSize: "0.7rem",
				display:'flex',
				alignItems:'center',
	        		width: "30px",
					justifyContent:'center',
					height: "18px",
			  boxShadow:"none",
				"& .MuiButton-startIcon": {
           margin: "3px", 
           fontSize: "7px", 
           color: "#339933", 
        },

          }}
		>
			{button.label}
		</Button>
	);
}


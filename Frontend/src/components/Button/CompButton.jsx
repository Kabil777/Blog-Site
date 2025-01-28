import React from "react";
import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

export default function CompButton({ index }) {
	const buttons = [
		{ label: "PYTHON", icon: <FaPython /> },
		{ label: "DATA STRUCTURES", icon: <AiOutlineKubernetes /> },
		{ label: "FOLLOW", icon: <IoMdAdd /> },
	];
	const button = buttons[index];

	return (
		<Button
			key={index}
			size="small"
			variant="contained"
			startIcon={button.icon}
			sx={{
				width: "5.25rem",           
				height: "1.5rem",           
				justifyContent: "center",    
				textAlign: "center",       
				padding: 0,                 
				fontSize: "0.745rem",       
				display: "flex",
				boxShadow: "none",
				color: "#04BF8A",
				backgroundColor: "#CAFDCA",
				gap: "0",                   

				"& .MuiButton-startIcon": {  
					marginRight: '3.5px',
					fontSize: "0.675rem",      
					alignContent:"center",
					alignItems: "center"
				},
			}}
		>
			{button.label}
		</Button>
	);
}


import Button from "@mui/material/Button";
import { FaFeatherAlt } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useState } from "react";
import { ButtonGroup } from "@mui/material";

export default function BasicButtons() {
	const [activeButton, setActiveButton] = useState(null);

	const handleClick = (index) => {
		if (activeButton !== index) {
			setActiveButton(index);
		}
	};

	const buttons = [
		{ label: "All" },
		{ label: "Featured", icon: <FaFeatherAlt /> },
		{ label: "Trending", icon: <IoMdTrendingUp /> },
		{ label: "Python", icon: <IoLogoPython /> },
		{ label: "Java", icon: <FaJava /> },
		{ label: "HTML", icon: <FaHtml5 /> },
		{ label: "Outlined", icon: <IoIosGitNetwork /> },
		{ label: "Upload", icon: <FaCloudUploadAlt /> },
		{ label: "Upload", icon: <FaCloudUploadAlt /> },
		{ label: "Upload", icon: <FaCloudUploadAlt /> },
	];

	return (
		<ButtonGroup
			size="small"
			sx={{
				overflow: "scroll",
				flexShrink: "0",
				maxWidth: "100%",
				display: "flex",
				borderRadius: "0px",
				height: "35px",
				scrollbarWidth: "none",
				gap: "20px",
				'& .MuiButton-root': {
   						borderRadius: '2px',
 		},
			}}
		>
			{buttons.map((button, index) => (
				<Button
					key={index}
					variant="contained"
					startIcon={button.icon}
					onClick={() => handleClick(index)}
					sx={{
						borderRadius: "0px",
						padding: "10px 15px",
						fontWeight: "bold",
						boxShadow: "none",
						"&:hover": {
							boxShadow: "none",
						},
						height: "100%",
						flexShrink: "0",
						backgroundColor: activeButton === index ? "#2155CD" : "#EEF5FF",
						color: activeButton === index ? "#EEF5FF" : "#2155CD",
					}}
				>
					{button.label}
				</Button>
			))}
		</ButtonGroup>
	);
}

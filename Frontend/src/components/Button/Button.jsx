import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaFeatherAlt } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useState } from "react";

export default function BasicButtons() {
	const [activeButton, setActiveButton] = useState(null);

	const handleClick = (index) => {
		if (activeButton !== index) {
			setActiveButton(index);
		}
	};

	const buttons = [
		{ label: "Featured", icon: <FaFeatherAlt /> },
		{ label: "Trending", icon: <IoMdTrendingUp /> },
		{ label: "Python", icon: <IoLogoPython /> },
		{ label: "Java", icon: <FaJava /> },
		{ label: "HTML", icon: <FaHtml5 /> },
		{ label: "Outlined", icon: <IoIosGitNetwork /> },
		{ label: "Upload", icon: <FaCloudUploadAlt /> },
	];

	return (
		<Stack
			spacing={3}
			direction="row"
			sx={{ height: "50px", scrollbarWidth: "none" }}
			overflow="scroll"
		>
			{buttons.map((button, index) => (
				<Button
					key={index}
					variant="contained"
					startIcon={button.icon}
					onClick={() => handleClick(index)}
					sx={{
						fontWeight: "bold",
						width: "15%",
						height: "90%",
						boxShadow: "none",
						border: "1px solid #EEF5FF",
						"&:hover": {
							boxShadow: "none",
						},
						backgroundColor: activeButton === index ? "#2155CD" : "#EEF5FF",
						color: activeButton === index ? "#EEF5FF" : "#2155CD",
					}}
				>
					{button.label}
				</Button>
			))}
		</Stack>
	);
}

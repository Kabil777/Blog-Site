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
		>
			{button.label}
		</Button>
	);
}


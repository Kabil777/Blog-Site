import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
export default function CompButton({ index }) {
	const buttons = [
		{ label: "PYHTON", icon: <FaPython /> },
		{ label: "DATA STRUCTURES", icon: <AiOutlineKubernetes /> },
		{ label: "FOLLOW", icon: <IoMdAdd size={15} /> },
	];
	const button = buttons[index];
	return (
		<Button
			key={index}
			size="medium"
			variant="contained"
			startIcon={button.icon}
			sx={{
				height: "30px",
				width: "80px",
				justifyContent: "center",
				textAlign: "center",
				padding: "none",
				background: "#eef5ff",
				color: "#2155cd",
				boxShadow: "none",
				p: "5px 2px",
				fontSize: "0.75rem",
				borderRadius: "0",
				"&:hover": {
					boxShadow: "none",
				},
				"&:active": {
					boxShadow: "none",
				},
			}}
		>
			{button.label}
		</Button>
	);
}

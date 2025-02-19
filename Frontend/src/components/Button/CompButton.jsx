import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";

export default function CompButton({ index }) {
	const buttons = [
		{ label: "PYTHON", icon: <FaPython /> },
		{ label: "DATA STRUCTURES", icon: <AiOutlineKubernetes /> },
		{ label: "Follow" },
	];
	const button = buttons[index];

	return (
		<Button
			key={index}
			size="small"
			variant="contained"
			startIcon={button.icon}
			sx={{
				textAlign: "center",
				background: "#CAFDCA",
				color: "#04BF8A",
				boxShadow: "none",
				p: "2px 10px",
				fontSize: "0.65rem",
				fontWeight: "bold",
				textTransform: "none",
				borderRadius: "2px",
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


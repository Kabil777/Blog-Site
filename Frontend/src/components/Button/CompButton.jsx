import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import  {IoMdAdd} from "react-icons/io";

export default function CompButton({ index }) {
	const buttons = [
		{ label: "PYTHON", icon: <FaPython /> },
		{ label: "DATA STRUCTURES", icon: <AiOutlineKubernetes /> },
		{ label: "FOLLOW", icon: <IoMdAdd size={15} /> },
	];
	const button = buttons[index];

	return (
		<Button
			key={index}
			size="small"
			variant="contained"
			startIcon={button.icon}
			sx={{lineHeight: 1,color:"#336699",backgroundColor:"#EEF5FF" ,	width: "auto",
				    minWidth:'unset',
					height: "auto",
				    minHeight: 'unset',
				    boxShadow:"none",
					fontSize: "0.6875rem",}}
		>
			{button.label}
		</Button>
	);
}


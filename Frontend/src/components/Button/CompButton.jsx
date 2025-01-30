import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import  {IoMdAdd} from "react-icons/io";

import { ThemeProvider } from "@mui/material";
import ButtonTheme from "./ButtonTheme";
export default function CompButton({ index }) {
	const buttons = [
		{ label: "PYTHON", icon: <FaPython /> },
		{ label: "DATA STRUCTURES", icon: <AiOutlineKubernetes /> },
		{ label: "FOLLOW", icon: <IoMdAdd size={15} /> },
	];
	const button = buttons[index];

	return (
		<ThemeProvider theme={ButtonTheme} >
			<Button
				key={index}
				size="small"
				variant="contained"
				startIcon={button.icon}
				sx={{
					width: "100%",
					justifyContent: "center",
					backgroundColor: "#ccffe6",
					color: "#04BF8A",
					padding: '5px',
					textAlign: "center",
					boxShadow: 'none',
					height: "1.25rem",
					" :hover": {
						boxShadow: "none",
					},
					"& .MuiButton-startIcon": {
						marginRight: '2px',
					},
				}}
			>{button.label}</Button>
		</ThemeProvider>
	);
}


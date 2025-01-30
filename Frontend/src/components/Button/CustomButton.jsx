import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ text = "Click Me", bgColor = "#1976d2", color = "#fff", icon: Icon }) {
	return (
		<Button
			variant="contained"
			size="small"
			startIcon={Icon ? <Icon /> : null}
			sx={{
				backgroundColor: bgColor,
				color: color,
				boxShadow: 'none',
				"&:hover": {
					backgroundColor: bgColor,
					boxShadow: 'none',
					opacity: 0.8,
				},
			}}
		>
			{text}
		</Button>
	);
}



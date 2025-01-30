import { createTheme } from "@mui/material";

const ButtonTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "0.6875rem",
				},
				startIcon: {
					"& > *:nth-of-type(1)": {
						fontSize: "15px",
						display:'flex',
						alignContent: 'center',
					},
				},
			},
		},
	},
});

export default ButtonTheme;


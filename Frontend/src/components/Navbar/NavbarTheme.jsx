import { createTheme } from "@mui/material";

const AppBarTheme = createTheme({
	palette: {
		bg: "#67676E",
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					height: "60px",
					boxShadow: "none",
					borderBottom: "1px solid #e4e4e7",
					display: "flex",
					justifyContent: "center",
					fontSize: "12px",
				},
			},
		},
		MuiStack: {
			styleOverrides: {
				root: {
					height: "100%",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					textAlign: "center",
					fontFamily: "Teko",
					fontSize: "2rem",
					fontWeight: "550",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					height: "45px",
					padding: "0 10px 0 10px",
					alignSelf: "center",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					height: "45px",
					width: "120px",
					fontSize: "1.2rem",
					fontWeight: "500",
					textTransform: "none",
					color: "#67676E",
					fontFamily: "Inter",
					"&:active": {
						color: "#1976d2",
					},
					"&:hover": {
						backgroundColor: "#ffffff",
						lineHeight: "2",
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					borderColor: "#e4e4e7",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: "Inter",
					height: "50px",
					padding: "0",
					fontSize: "1.1rem",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					fontSize: "1.8em",
					height: "40px",
					width: "40px",
					color: "#ffffff",
					padding: "0px",
					
					backgroundColor: "#2155CD",
					marginLeft: "15px",
					"&:hover": {
						backgroundColor: "#2155CD",
					},
				},
			},
		},
	},
});

export default AppBarTheme;

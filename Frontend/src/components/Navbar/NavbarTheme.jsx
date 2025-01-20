import { createTheme } from "@mui/material";

const AppBarTheme = createTheme({
	palette: {
		bg: "#67676E",
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					height: "75px",
					boxShadow: "none",
					borderBottom: "1px solid #e4e4e7",
					display: "flex",
					justifyContent: "center",
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
					fontSize: "2.05rem",
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
					fontSize: "1.35em",
					fontWeight: "500",
					textTransform: "none",
					color: "#67676E",
					fontFamily: "Inter",
					"&:active": {
						color: "#1976d2",
					},
					"&:hover": {
						backgroundColor: "#ffffff",
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
				input: {
					fontFamily: "Inter",
					fontSize: "1.1em",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					fontFamily: "Teko",
					fontSize: "1.8em",
					height: "50px",
					width: "50px",
					color: "#ffffff",
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

import { createTheme } from "@mui/material";

const ArticleTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "fit-content",
					maxHeight: "250px",
					border: "1px solid #e4e4e7",
					boxShadow: "none",
					fontSize: "14px",
					justifyContent: "space-between",
					borderRadius:"10px"
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					width: "75%",
					padding: "0",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				p: {
					fontSize: "1rem",
					fontWeight: "400",
					justifySelf: "flex-start",
					padding: "0",
					textAlign: "start",
					marginTop: "8px",
					color: "#6e6e67",
				},
				h1: {
					fontSize: "1.3rem",
					justifySelf: "flex-start",
					fontWeight: "750",
					textAlign: "start",
					fontFamily:"Lato"
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: "0",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					gap: "50px",
					width: "30px",
					height: "30px",
					padding: "0",
				},
			},
		},
	},
});

export default ArticleTheme;

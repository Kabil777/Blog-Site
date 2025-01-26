import { createTheme } from "@mui/material";

const ArticleTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "250px",
					border: "1px solid #e4e4e7",
					padding: "0 20px 0 20px",
					boxShadow: "none",
					fontSize: "1%",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					cursor: "pointer",
					marginBottom: "0",
					paddingBottom: "0",
					paddingTop: "0",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				p: {
					fontSize: "1rem",
					fontWeight: "400",
					width: "100%",
					justifySelf: "flex-start",
					textAlign: "start",
					marginTop: "16px",
					color: "#6e6e67",
				},
				h1: {
					fontSize: "1.3rem",
					width: "70%",
					justifySelf: "flex-start",
					fontWeight: "800",
					textAlign: "start",
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: "16px 16px 5px 16px",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					width: "30px",
					height: "30px",
					padding: "0",
				},
			},
		},
	},
});

export default ArticleTheme;

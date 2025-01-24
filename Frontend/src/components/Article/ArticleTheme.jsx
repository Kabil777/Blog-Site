import { createTheme } from "@mui/material";

const ArticleTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "290px",
					border: "1px solid #e4e4e7",
					padding: "0 20px 0 20px",
					boxShadow: "none",
					fontSize: "20px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					marginTop: "10px",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				p: {
					fontSize: "1rem",
					fontWeight: "500",
					width: "90%",
					justifySelf: "flex-start",
					textAlign: "start",
					marginTop: "16px",
					color: "#6e6e67",
				},
				h1: {
					fontSize: "1.5rem",
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
	},
});

export default ArticleTheme;

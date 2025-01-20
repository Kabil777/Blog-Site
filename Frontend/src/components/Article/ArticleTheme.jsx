import { createTheme } from "@mui/material";

const ArticleTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "325px",
					border: "1px solid #e4e4e7",
					padding: "0 20px 0 20px",
					boxShadow: "none",
					fontSize: "20px",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h6: {
					fontSize: "1.1rem",
					fontWeight: "500",
					width: "80%",
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
	},
});

export default ArticleTheme;

import { createTheme } from "@mui/material";

const ArticleTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "240px",
					border: "1px solid #e4e4e7",
					padding: " 10px 8px",
					boxShadow: "none",
					fontSize: "14px",
					justifyContent: "space-between",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					cursor: "pointer",
					paddingTop: "0",
					paddingBottom: "10px",
					width: "75%",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				p: {
					fontSize: "1rem",
					fontWeight: "400",
					justifySelf: "flex-start",

					textAlign: "start",
					marginTop: "8px",
					color: "#6e6e67",
				},
				h1: {
					fontSize: "1.5rem",
					justifySelf: "flex-start",
					fontWeight: "700",
					textAlign: "start",
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: "10px 16px 16px 16px",
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

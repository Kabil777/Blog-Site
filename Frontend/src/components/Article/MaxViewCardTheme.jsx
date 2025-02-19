import { createTheme } from "@mui/material";

const MaxViewCardTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "fit-content",
					maxHeight: "260px",
					border: "1px solid #e4e4e7",
					boxShadow: "none",
					fontSize: "14px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					width: "75%",
					padding: 0,
					"&:last-child": {
						paddingBottom: 0,
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: "1.3rem",
					justifySelf: "flex-start",
					fontWeight: "700",
					textAlign: "start",
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
	},
});

export default MaxViewCardTheme;

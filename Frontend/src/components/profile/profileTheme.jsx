import { createTheme } from "@mui/material";
const profileTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					justifyContent: "flex-start",
				},
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				content: {
					width: "100%",
				},
			},
		},
		MuiStack: {
			styleOverrides: {
				root: {
					alignItems: "flex-start"
				}
			}
		}
	},
});
export default profileTheme;

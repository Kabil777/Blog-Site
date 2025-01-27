import { createTheme } from "@mui/material";

const FollowTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					width: "85%",
					padding: "16px 0"
				},
			},
		},
	},
});

export default FollowTheme;

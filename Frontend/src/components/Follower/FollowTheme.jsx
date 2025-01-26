import { createTheme } from "@mui/material";

const FollowTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					width: "85%",
				},
			},
		},
	},
});

export default FollowTheme;

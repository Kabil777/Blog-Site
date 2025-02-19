import { createTheme } from "@mui/material";

const FollowTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					width: "100%",
					padding: "0",
				},
			},
		},	
	},
});

export default FollowTheme;

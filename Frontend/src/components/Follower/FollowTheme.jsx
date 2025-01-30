import { createTheme } from "@mui/material";

const FollowTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					width: "100%",
				},
			},
		},	
	},
});

export default FollowTheme;

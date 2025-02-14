import { createTheme } from "@mui/material";

const PostTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: "20px 0",
				},
				title: {
					fontSize: "1rem",
					fontFamily: "Inter"
				}
			}
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					height: "50px",
					width: "50px"
				}
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					height: "30px",
					width: "30px",
					padding: "0"
				}
			}
		}
	}
})

export default PostTheme

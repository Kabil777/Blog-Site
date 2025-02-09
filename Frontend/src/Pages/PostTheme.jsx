import { createTheme } from "@mui/material";

const   PostTheme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides:{
			root:{
				padding:"20px 0",
			},
			title:{
				fontSize:"1rem",
				fontFamily:"Inter"
			}
			}
		},
		MuiAvatar:{
			styleOverrides:{
				root:{
					height:"50px",
					width:"50px"
				}
			}
		}
	}
})

export default  PostTheme

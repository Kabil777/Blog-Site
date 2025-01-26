import Typography from "@mui/material/Typography";

import Profile from "../profile/profile";
import { Box, Stack } from "@mui/material";
import FollowTheme from "./FollowTheme";
import { ThemeProvider } from "@mui/material";

export default function MostFollowed() {
	return (
		<ThemeProvider theme={FollowTheme}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "0.35rem",
					justifyContent: "center",
					width: "100%",
					border: "1px solid #e4e4e7",
					padding: "16px 0 0 0",
				}}
			>
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: "1.15rem",
						alignItems: "flex-start",
						textAlign: "left",
						marginLeft: "1.15rem",
					}}
				>
					MOST FOLLOWED
				</Typography>
				<Stack direction="column" width="100%" alignItems="center">
					<Profile actionEnable={null} />
					<Profile sx={{}} />
					<Profile sx={{}} />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

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
					gap: "7%",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					width: "100%",
					fontSize:"12px",
					border: "1px solid #e4e4e7",
					padding: "16px 20px",
					height: "275px",
				}}
			>
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: "1.2rem",
						fontFamily: "'Source Sans 3',serif",
					}}
				>
					Top Writers
				</Typography>
				<Stack direction="column" width="100%" alignItems="flex-start">
					<Profile actionEnable={null} showButton={true} />
					<Profile showButton={true} />
					<Profile showButton={true} />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

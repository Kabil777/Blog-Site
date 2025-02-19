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
					justifyContent: "flex-start",
					alignItems: "flex-start",
					width: "100%",
					fontSize: "12px",
					border: "1px solid #e4e4e7",
					padding: "20px",
					gap: "20px",
					borderRadius: "4px",
				}}
			>
				<Typography
					sx={{
						fontWeight: "bold",
						fontSize: "1rem",
						fontFamily: "inter",
					}}
				>
					Top Writers
				</Typography>
				<Stack direction="column" alignItems="flex-start" sx={{ gap: "20px" }}>
					<Profile actionEnable={true} showButton={true} />
					<Profile actionEnable={true} showButton={true} />
					<Profile actionEnable={true} showButton={true} />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

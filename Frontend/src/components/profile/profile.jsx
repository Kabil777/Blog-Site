import { Avatar, IconButton, CardHeader } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";

function Profile({ actionEnable }) {
	return (
		<CardHeader
			avatar={
				<Avatar sx={{ bgcolor: "#2155cd" }} aria-label="recipe">
					K
				</Avatar>
			}
			action={
				actionEnable && (
					<IconButton aria-label="settings">
						<CiMenuKebab />
					</IconButton>
				)
			}
			title="Kabil"
			subheader="kabil.ec23@bitsathy.ac.in"
			sx={{
				justifyContent: "flex-start",
				textAlign: "start",
				alignItems: "center",
			}}
			titleTypographyProps={{
				fontSize: "1rem",
				fontWeight: "bold",
			}}
			subheaderTypographyProps={{
				fontSize: "0.9rem",
				fontWeight: "normal",
				color: "text.secondary",
			}}
		/>
	);
}

export default Profile;

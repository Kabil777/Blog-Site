import { Avatar, IconButton, CardHeader ,Box } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";
import CompButton from "../Button/CompButton";

function Profile({ actionEnable, showButton }) {
	return (
		<CardHeader
			avatar={
				<Avatar sx={{ bgcolor: "#2155cd" }} aria-label="recipe">
					K
				</Avatar>
			}
			
			title={
				<Box sx={{ display: 'flex', alignItems: 'center' ,gap:1 }}>
					<span>Kabil</span>
					{showButton && <CompButton index={2} />}
				</Box>
			}
	        action={
				<>
					{actionEnable && (
						<IconButton aria-label="settings">
							<CiMenuKebab />
						</IconButton>
					)}
				</>
			}
			subheader="kabil.ec23@bitsathy.ac.in"
			sx={{
				justifyContent: "flex-start",
				textAlign: "start",
				alignItems: "center",
			}}
			titleTypographyProps={{
				fontSize: "1.1rem",
				fontWeight: "bold",
			}}
			subheaderTypographyProps={{
				fontSize: "1rem",
				fontWeight: "normal",
				color: "text.secondary",
			}}
		/>
	);
}

export default Profile;


import { Avatar, IconButton, CardHeader, ThemeProvider } from "@mui/material";
import CompButton from "../Button/CompButton";
import { useSelector } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";
import profileTheme from "./profileTheme";

function Profile({ coverDetails, userDetails, actionEnable, showButton }) {
	const avatar = useSelector((state) => state.auth.profileCover);
	const name = useSelector((state) => state.auth.name);
	const email = useSelector((state) => state.auth.email);
	const getProfile = () => {
		if (userDetails) {
			return userDetails;
		} else if (coverDetails) {
			return coverDetails.user;
		} else {
			return false;
		}
	};
	const data = getProfile();
	return (
		<CardHeader
			avatar={
				<Avatar src={data ? data.profileCover : avatar} alt="bg"></Avatar>
			}
			title={data ? data.name : name}
			subheader={data ? data.email : email}

			action={
				<>
					{actionEnable && (
						<IconButton aria-label="settings">
							<HiOutlineDotsVertical />
						</IconButton>
					)}
					{showButton && <CompButton index={2} />}
				</>
			}
			
			sx={{
				display: "flex",
				gap: "10px",
				justifyContent: "flex-start",
				textAlign: "start",
				alignItems: "center",
				"& .MuiCardHeader-action": {
					alignSelf:"center",
				},
				"& .MuiCardHeader-avatar": {
					marginRight: "0",
				}
			}}
			titleTypographyProps={{
				fontSize: ".9rem",
				fontWeight: "800",
			}}
			subheaderTypographyProps={{
				fontSize: "0.8rem",
				fontWeight: "600",
				color: "text.secondary",
			}}
		/>
	);
}
export default Profile;

import { Avatar, IconButton, CardHeader } from "@mui/material";
import CompButton from "../Button/CompButton";
import { useSelector } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";

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
			action={
				<>
					{actionEnable && (
						<IconButton aria-label="settings">
							<HiOutlineDotsVertical />
						</IconButton>
					)}
				</>
			}
			subheader={data ? data.email : email}
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

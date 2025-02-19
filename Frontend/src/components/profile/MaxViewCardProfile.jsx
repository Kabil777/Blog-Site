import { Avatar, IconButton, CardHeader, ThemeProvider } from "@mui/material";
import CompButton from "../Button/CompButton";
import { useSelector } from "react-redux";
import {RiUserFollowLine} from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import profileTheme from "./profileTheme";
function capitalizefirstLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function capitalizesentence(sentence) {
	return sentence.split(" ").map(capitalizefirstLetter).join(" ");
}

function MaxViewProfile({ coverDetails, userDetails, actionEnable, showButton }) {
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
				<Avatar src={data ? data.profileCover : avatar} alt="bg" sx={{
					width: "22px",
					height: "22px",
				}}></Avatar>
			}
			title={capitalizesentence(data ? data.name : name)}
			action={
				<>
					{actionEnable && (
						<IconButton aria-label="Follow" sx={{
							fontSize:"1.2rem",
						}}>
						        <RiUserFollowLine />
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
					alignSelf: "center",
				},
				"& .MuiCardHeader-avatar": {
					marginRight: "0",
				}
			}}
			titleTypographyProps={{
				fontSize: "0.9rem",
				fontWeight: "normal",
				overflow: "hidden",
				textOverflow: "ellipsis",
			}}
		/>
	);
}
export default MaxViewProfile;

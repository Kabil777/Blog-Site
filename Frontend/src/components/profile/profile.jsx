import { Avatar, IconButton, CardHeader } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";
import CompButton from "../Button/CompButton";
import { useSelector } from "react-redux";

function Profile({userDetails, actionEnable, showButton }) {
	const avatar = useSelector((state) => state.auth.profileCover);
	const name = useSelector((state)=>state.auth.name)
	const email = useSelector((state)=>state.auth.email)
	console.log(userDetails)
	return (
		<CardHeader
			avatar={<Avatar src={userDetails?userDetails.profileCover:avatar} alt="bg"></Avatar>}
			title={userDetails?userDetails.name :name }
			action={
				<>
					{actionEnable && (
						<IconButton aria-label="settings">
							<CiMenuKebab />
						</IconButton>
					)}
					{showButton && <CompButton index={2} />}
				</>
			}
			subheader={userDetails?userDetails.email:email}
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

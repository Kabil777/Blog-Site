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
		<ThemeProvider theme={profileTheme}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "#2155cd" }} aria-label="recipe">
						K
					</Avatar>
				}

				title={
					<span className="kabil" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
						Kabil{" "}
						{showButton && (
							<span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<CompButton index={2} />
							</span>
						)}
					</span>
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
		</ThemeProvider>
	);
}
export default Profile;

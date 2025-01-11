import { GrLike } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import {
	Stack,
	Typography,
	Card,
	IconButton,
	CardContent,
	Box,
	CardActions,
} from "@mui/material";
import Profile from "../profile/profile";
import netBg from "../../assets/networks.png";
import { ThemeProvider } from "@mui/material";
import ArticleTheme from "./ArticleTheme";

function ArticleCard() {
	return (
		<ThemeProvider theme={ArticleTheme}>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Profile action={true} />
				<CardContent>
					<Stack direction="row" sx={{ flexGrow: 1, width: "100%" }}>
						<Stack
							direction="column"
							alignItems="flex-start"
							sx={{ flexGrow: "1" }}
						>
							<Typography variant="h1" component="h4">
								Announcement on Networking Documentation
							</Typography>
							<Typography variant="h6">
								Some data center professionals rely on outdated network topology
								diagrams and spreadsheets for their documentation, while Data
								Center Infrastructure Management (DCIM) software ....
							</Typography>
						</Stack>
						<Box
							component="img"
							src={netBg}
							sx={{
								height: "150px",
								flexGrow: 1,
								backgroundColor: "#ffffff",
							}}
						/>
					</Stack>
				</CardContent>
				<CardActions>
					<IconButton>
						<GrLike />
					</IconButton>
					<IconButton>
						<FaRegBookmark />
					</IconButton>
					<IconButton>
						<IoShareSocialSharp />
					</IconButton>
				</CardActions>
			</Card>
		</ThemeProvider>
	);
}

export default ArticleCard;

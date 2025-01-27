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
import netBg from "../../assets/networks.jpg";
import { ThemeProvider } from "@mui/material";
import ArticleTheme from "./ArticleTheme";

function ArticleCard() {
	return (
		<ThemeProvider theme={ArticleTheme}>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<Profile actionEnable={true} />
				<Stack direction="row" sx={{ width: "100%" }}>
					<Stack
						direction="column"
						sx={{ flexGrow: 1, width: "60%", justifyContent: "space-around" }}
					>
						<CardContent>
							<Typography
								variant="h1"
								component="h4"
								fontFamily="Inter"
								lineHeight="1.5"
							>
								Announcement on Networking Documentation
							</Typography>
							<Typography
								variant="p"
								component="p"
								fontFamily="Inter"
								lineHeight="1.5rem"
								sx={{
									display: "-webkit-box", // Creates a flexible block container
									WebkitBoxOrient: "vertical", // Sets the orientation to vertical
									WebkitLineClamp: 3, // Limits the content to 3 lines
									overflow: "hidden", // Hides overflowing text
									textOverflow: "ellipsis",
								}}
							>
								Some data center professionals rely on outdated network topology
								diagrams and spreadsheets for their documentation, while Data
								Center Infrastructure Management (DCIM) software while Data
								Center Infrastructure Management (DCIM) software while Data
								Center Infrastructure Management (DCIM) software ....
							</Typography>
						</CardContent>
						<CardActions>
							<Stack
								direction="row"
								justifyContent="flex-start"
								gap="10px"
								width="50%"
								paddingX="8px"
								paddingY="8px"
							>
								<IconButton>
									<GrLike size={20} />
								</IconButton>
								<IconButton>
									<FaRegBookmark size={20} />
								</IconButton>
								<IconButton>
									<IoShareSocialSharp size={20} />
								</IconButton>
							</Stack>
							<Stack
								direction="row"
								justifyContent="flex-start"
								gap="10px"
								width="50%"
							></Stack>
						</CardActions>
					</Stack>
					<Stack
						component="img"
						src={netBg}
						sx={{
							height: "70%",
							width: "20%",
							mr: "16px",
							justifySelf: "center",
							backgroundColor: "#ffffff",
						}}
					/>
				</Stack>
			</Card>
		</ThemeProvider>
	);
}

export default ArticleCard;

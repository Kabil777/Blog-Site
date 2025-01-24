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
				<Stack direction="row" sx={{ flexGrow: 1, width: "100%" }}>
					<Stack
						direction="column"
						sx={{ flexGrow: 1, width: "100%", justifyContent: "space-between" }}
					>
						<CardContent>
							<Typography variant="h1" component="h4" fontFamily="Inter">
								Announcement on Networking Documentation
							</Typography>
							<Typography
								variant="p"
								component="p"
								fontFamily="Roboto"
								lineHeight="1.5"
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
							>
								<IconButton>
									<GrLike />
								</IconButton>
								<IconButton>
									<FaRegBookmark />
								</IconButton>
								<IconButton>
									<IoShareSocialSharp />
								</IconButton>
							</Stack>
							<Stack
								direction="row"
								justifyContent="flex-start"
								gap="10px"
								width="50%"
							>
								<Typography
									variant="p"
									component="p"
									fontFamily="Roboto"
									lineHeight="1.5"
									fontSize="1rem"
									textAlign="end"
									width="75%"
								>
									Jan 25-2021
								</Typography>
							</Stack>
						</CardActions>
					</Stack>
					<Box
						component="img"
						src={netBg}
						sx={{
							height: "70%",
							alignSelf: "center",
							mr: "16px",
							width: "20%",
							backgroundColor: "#ffffff",
						}}
					/>
				</Stack>
			</Card>
		</ThemeProvider>
	);
}

export default ArticleCard;

import {
	Stack,
	Typography,
	Card,
	CardContent,
	CardActions,
} from "@mui/material";
import Profile from "../profile/profile";
import netBg from "../../assets/networks.jpg";
import { ThemeProvider } from "@mui/material";
import ArticleTheme from "./ArticleTheme";
import PostActionButtons from "../PostActions/PostActionButtons";

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
									display: "-webkit-box",
									WebkitBoxOrient: "vertical",
									WebkitLineClamp: 3,
									overflow: "hidden",
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
							<PostActionButtons position={true} />
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

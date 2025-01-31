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
import { useNavigate } from "react-router-dom";

function ArticleCard({ post }) {
	const navigate = useNavigate();
	const postNavigate = () => {
		navigate(`/kabil/${post.slug}`);
	};
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
						<CardContent onClick={postNavigate}>
							<Typography
								variant="h1"
								component="h4"
								fontFamily="Inter"
								lineHeight="1.5"
							>
								{post.name}
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
								{post.description}
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

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
	console.log("post", post);
	return (
		<ThemeProvider theme={ArticleTheme}>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<Profile actionEnable={true} coverDetails={post} />
				<Stack direction="column" sx={{ width: "100%" }}>
					<Stack
						direction="row"
						sx={{ flexGrow: 1, width: "100%", justifyContent: "center", alignItems: "center" }}
					>
						<CardContent onClick={postNavigate} sx={{ width: "75%" }}>
							<Typography
								variant="h1"
								component="h4"
								fontFamily="Inter"
								lineHeight="1.5"
								sx={{
									display: "-webkit-box",
									WebkitBoxOrient: "vertical",
									WebkitLineClamp: 2,
									overflow: "hidden",
									textOverflow: "ellipsis",
								}}
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
						<Stack
							component="img"
							src={netBg}
							sx={{
								height: "100px",
								borderRadius: "5%",
								width: "20%",
								mr: "16px",
								justifySelf: "center",
								backgroundColor: "#ffffff",
							}}
						/>
					</Stack>

					<CardActions>
						<PostActionButtons position={true} article={post} />
					</CardActions>
				</Stack>
			</Card>
		</ThemeProvider>
	);
}

export default ArticleCard;

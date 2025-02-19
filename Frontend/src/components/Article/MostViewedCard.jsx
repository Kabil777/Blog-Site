import {
	Stack,
	Typography,
	Card,
	CardContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MaxViewProfile from "../profile/MaxViewCardProfile";
import MaxViewCardTheme from "./MaxViewCardTheme";
import ArticleTheme from "./ArticleTheme";
function capitalizefirstLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function capitalizesentence(sentence) {
	return sentence.split(" ").map(capitalizefirstLetter).join(" ");
}
function MostViewedCard({ post }) {
	const navigate = useNavigate();
	const postNavigate = () => {
		navigate(`/kabil/${post.slug}`);
	};
	const postUrl = `${window.location.origin}/kabil/${post.slug}`;
	console.log("post", post);
	return (
		<ThemeProvider theme={MaxViewCardTheme}>
			<Card
				sx={{

					display: "flex",
					border: "none",
					gap: "6px",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
			>
				<MaxViewProfile coverDetails={post} actionEnable={true} />
				<Stack direction="column" sx={{ width: "100%", cursor: "pointer", }} onClick={postNavigate}>
					<Stack
						direction="row"
						sx={{
							flexGrow: 1,
							width: "100%",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<CardContent sx={{ width: "75%" }}>
							<Typography
								variant="h1"
								component="h4"
								fontFamily="Inter"
								lineHeight="1.5"
								sx={{
									display: "-webkit-box",
									WebkitBoxOrient: "vertical",
									WebkitLineClamp: 1,
									overflow: "hidden",
									textOverflow: "ellipsis",
								}}
							>
								{capitalizesentence(post.name)}
							</Typography>
						</CardContent>
					</Stack>
				</Stack>
			</Card>
		</ThemeProvider>
	);
}

export default MostViewedCard;

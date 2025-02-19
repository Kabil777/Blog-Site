import { Box, Grid2, Typography } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import MostViewedCard from "../components/Article/MostViewedCard";
import MediaCard from "../components/Home-card/card";
import MostFollowed from "../components/Follower/Follow";
import BasicButtons from "../components/Button/Button";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostCover } from "../store/reducers/getArticleCover";
import { getSortedPosts } from "../store/reducers/getSortedbyLike";
function HomePage() {
	const coverData = useSelector((state) => state.cover.Articles);
	const likeData = useSelector((state) => state.sortLike.MostLikedArticles);
	const stat = useSelector((state) => state.sortLike.stat)
	const status = useSelector((state) => state.cover.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status !== "success") dispatch(getPostCover());
	}, [dispatch]
	);
	useEffect(() => {
		if (stat !== "success") dispatch(getSortedPosts());
	}, [dispatch]
	);
	return (
		<>
			<Container
				fixed
				maxWidth="xl"
				sx={{
					mt: "100px",
				}}
			>
				<Grid2 container spacing={3} justifyContent="center" alignItems="flex-start">
					<Grid2
						container
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 12, md: 12, lg: 8.5, xl: 7.5 }}
						spacing={4}
						sx={{ alignContent: "flex-start", justifyContent: "center" }}
					>
						<BasicButtons />
						{coverData.length !== 0 ? (
							<>
								{coverData.map((post) => (
									<ArticleCard key={post.id} post={post} />
								))}
							</>
						) : (
							<Typography
								sx={{ alignSelf: "flex-start", justifySelf: "center" }}
							>
								No posts available
							</Typography>
						)}
					</Grid2>
					<Grid2
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 0, md: 0, lg: 3.5, xl: 3 }}
						container
						overflow="none"
						sx={{ scrollbarWidth: "none" }}
						height="100%"
						spacing={4}
					>
						<MostFollowed sx={{ width: "100%", height: "100%" }} />
						<Box sx={{
							display: "flex", flexDirection: "column", border: "1px solid #e0e0e0", borderRadius: '5px', padding: "20px 20px 20px 20px", gap: "20px"
						}}>
							<Typography textAlign="left" variant="h5" sx={{
								fontSize: "1.2rem",
								fontWeight: "700"
							}}>Top Picks</Typography>
							{likeData.length !== 0 ? (
								<>
									{likeData.map((post) => (
										<MostViewedCard key={post.id} post={post} />
									))}
								</>
							) : (
								<Typography
									sx={{ alignSelf: "flex-start", justifySelf: "center" }}
								>
									No posts available
								</Typography>
							)}
						</Box>
						<MediaCard sx={{ width: "100%", height: "100%" }} />
						<MediaCard sx={{ width: "100%", height: "100%" }} />
					</Grid2>
				</Grid2>
			</Container>
		</>
	);
}

export default HomePage;

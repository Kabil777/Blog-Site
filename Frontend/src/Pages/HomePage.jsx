import { Grid2 } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import MediaCard from "../components/Home-card/card";
import MostFollowed from "../components/Follower/Follow";
import BasicButtons from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostCover } from "../store/reducers/getArticleCover";
function HomePage() {
	const coverData = useSelector((state) => state.cover.Articles);
	const status = useSelector((state) => state.cover.status);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status !== "success") dispatch(getPostCover());
	}, [dispatch]);
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
					>
						<BasicButtons />
						{coverData.map((post) => {
							return <ArticleCard key={post.id} post={post} />;
						})}
					</Grid2>
					<Grid2
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 0, md: 0, lg: 3.5, xl: 3 }}
						container
						overflow="scroll"
						sx={{ scrollbarWidth: "none" }}
						height="100%"
						spacing={4}
					>
						<MostFollowed />
						<MediaCard sx={{ width: "100%", height: "100%" }} />
						<MediaCard sx={{ width: "100%", height: "100%" }} />
					</Grid2>
				</Grid2>
			</Container>
		</>
	);
}

export default HomePage;

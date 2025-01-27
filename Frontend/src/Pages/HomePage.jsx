import { Grid2 } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import MediaCard from "../components/Home-card/card";
import MostFollowed from "../components/Follower/Follow";
import BasicButtons from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import Container from "@mui/material/Container";
function HomePage() {
	return (
		<>
			<Navbar />

			<Container
				fixed
				maxWidth="1400px"
				sx={{
					mt: "100px",
					overflowY: "hidden",
				}}
			>
				<Grid2 container spacing={3} justifyContent="center">
					<Grid2
						container
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 12, md: 12, lg: 8.5, xl: 7.5 }}
						spacing={1}
					>
						<BasicButtons />
						<ArticleCard style={{ fontFamily: "Inter" }} />
						<ArticleCard />
						<ArticleCard />
						<ArticleCard />
					</Grid2>
					<Grid2
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 0, md: 0, lg: 3.5, xl: 3 }}
						container
						overflow="scroll"
						sx={{ scrollbarWidth: "none" }}
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

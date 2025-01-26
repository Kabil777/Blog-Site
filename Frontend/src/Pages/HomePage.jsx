import { Grid2, Box } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import MediaCard from "../components/Home-card/card";
import MostFollowed from "../components/Follower/Follow";
import BasicButtons from "../components/Button/Button";
function HomePage() {
	return (
		<Grid2 container spacing={6} alignItems="flex-start">
			<Grid2
				container
				md={8}
				lg={8}
				xl={8}
				size={{ xs: 12, md: 12, lg: 8.5, xl: 8.5 }}
				spacing={6}
			>
			<Grid2
				container
				md={8}
				lg={8}
				xl={8}
				size={{ xs: 12, md: 12, lg: 12, xl: 12 }}
			>
				<BasicButtons/>
			</Grid2>
				<ArticleCard style={{ fontFamily: "Inter" }} />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</Grid2>
			<Grid2
				md={8}
				lg={8}
				xl={8}
				size={{ xs: 0, md: 0, lg: 3.5, xl: 3.5 }}
				sx={{ backgroundColor: "white", height: "100vh" }}
				spacing={6}
			>
				<MostFollowed/>	
				<Box sx={{marginTop: '3rem'}}>
				<MediaCard sx={{ width: "100%", height: "100%" }} />	
				</Box>
				<Box sx={{ marginTop: '3rem'}}>
				<MediaCard sx={{ width: "100%", height: "100%" }} />	
				</Box>
				<Box sx={{ height: "100vh" }}></Box>
			</Grid2>
		</Grid2>
	);
}

export default HomePage;


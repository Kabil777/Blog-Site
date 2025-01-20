import { Grid2, Box } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
function HomePage() {
	return (
		<>
			<Navbar />

			<Container
				maxWidth="xl"
				sx={{
					width: "100%",
					mt: "130px",
					overflowY: "hidden",
				}}
			>
				<Grid2 container spacing={6} alignItems="flex-start">
					<Grid2
						container
						md={8}
						lg={8}
						xl={8}
						size={{ xs: 12, md: 12, lg: 8.5, xl: 8.5 }}
						spacing={6}
					>
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
						sx={{ backgroundColor: "aqua", padding: "50px" }}
					>
						<Box sx={{ height: "100vh" }}></Box>
					</Grid2>
				</Grid2>
			</Container>
		</>
	);
}

export default HomePage;

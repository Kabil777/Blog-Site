import { Container } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

function PostPage() {
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
				hello
			</Container>
		</>
	);
}

export default PostPage;

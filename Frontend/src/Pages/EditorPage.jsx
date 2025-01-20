import Page from "../components/Editor/Page";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
function EditorPage() {
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
				<Page />
			</Container>
		</>
	);
}

export default EditorPage;

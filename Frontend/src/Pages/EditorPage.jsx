import Page from "../components/Editor/Page";
import { Container } from "@mui/material";
function EditorPage() {
	return (
		<>

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

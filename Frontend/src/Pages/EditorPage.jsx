import Page from "../components/Editor/Page";
import { Box, Container } from "@mui/material";
function EditorPage() {
	return (
		<>
			<Container
				maxWidth="xl"
				sx={{
					width: "100%",
				}}
			>
				<Page />
			</Container>
		</>
	);
}

export default EditorPage;

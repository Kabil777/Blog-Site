import { Container, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Navbar from "../components/Navbar/Navbar";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/tokyo-night-dark.css";
import rehypeHighlight from "rehype-highlight";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Profile from "../components/profile/profile";
import { ThemeProvider } from "@mui/material/styles";
import PostTheme from "./PostTheme";
import PostActionButtons from "../components/PostActions/PostActionButtons";
import ChipComponent from "../components/Form/chipComponent";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import axios from "axios";

function PostPage() {
	const [content, setContent] = useState("");

	useEffect(() => {
		const getPost = async () => {
			try {
				const { data } = await axios.get("http://localhost:7000/post");

				console.log("Raw response:", data);

				const formattedText = data
					.replace(/^"|"$/g, "") // Remove surrounding quotes
					.replace(/\\n/g, "\n") // Convert escaped newlines
					.replace(/\\\\/g, "\\"); // Convert escaped backslashes

				setContent(formattedText);
			} catch (error) {
				console.error("Error fetching post:", error);
			}
		};

		getPost();
	}, []);

	return (
		<>
			<ThemeProvider theme={PostTheme}>
				<Navbar />
				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						mt: "100px",
						alignItems: "center",
						justifyContent: "center",
						overflowY: "hidden",
						textAlign: "start",
						flexDirection: "column",
					}}
				>
					<Stack width="65%">
						<Typography
							component="h1"
							variant="h1"
							fontSize="2.5rem"
							fontWeight="600"
							fontFamily="Lato"
						>
							Basic Redux: Basic Redux Components
						</Typography>
						<Profile />
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							paddingBottom="10px"
						>
							<Stack
								alignItems="center"
								justifyContent="flex-start"
								direction="row"
								spacing={2}
							>
								<ChipComponent />
							</Stack>
							<PostActionButtons position={false} />
						</Stack>
						<Divider
							variant="fullWidth"
							flexItem
							sx={{ width: "100%", marginY: 2, alignSelf: "center" }}
						/>
					</Stack>

					<ReactMarkdown
						rehypePlugins={[rehypeHighlight, rehypeRaw]}
						remarkPlugins={[remarkGfm, remarkBreaks]} // Add the remarkGfm plugin
						className="reactMarkdown"
					>
						{content}
					</ReactMarkdown>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default PostPage;

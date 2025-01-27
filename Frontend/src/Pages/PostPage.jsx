import { Container } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/tokyo-night-dark.css";
import rehypeHighlight from "rehype-highlight";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

function PostPage() {
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch("../../public/REDUX.md")
			.then((res) => res.text())
			.then((text) => setContent(text));
	}, []);
	return (
		<>
			{console.log(content)}
			<Navbar />
			<Container
				fixed
				maxWidth="1400px"
				sx={{
					mt: "100px",
					overflowY: "hidden",
					textAlign: "start",
				}}
			>
				{console.log(content)}
				<ReactMarkdown
					rehypePlugins={[rehypeHighlight]}
					className="reactMarkdown"
				>
					{content}
				</ReactMarkdown>
			</Container>
		</>
	);
}

export default PostPage;

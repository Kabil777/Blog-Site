import { Container, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/tokyo-night-dark.css";
import rehypeHighlight from "rehype-highlight";
import { useEffect } from "react";
import "./style.css";
import Profile from "../components/profile/profile";
import { ThemeProvider } from "@mui/material/styles";
import PostTheme from "./PostTheme";
import PostActionButtons from "../components/PostActions/PostActionButtons";
import ChipComponent from "../components/Form/chipComponent";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArticleGetter } from "../store/reducers/getArticles";

function PostPage() {
	const { user, slug } = useParams();
	console.log(slug);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.article.postContent);
	console.log(data);
	const status = useSelector((state) => state.article.status);
	const title = useSelector((state) => state.article.postDetails.name);
	const userDetails = useSelector((state) => state.article.userDetails);
	const postDetails = useSelector((state) => state.article.postDetails);
	const getArticle = () => {
		dispatch(ArticleGetter({ user, slug }));
	};
	useEffect(() => {
		getArticle();
	}, []);

	return (
		<>
			<ThemeProvider theme={PostTheme}>
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
							{title}
						</Typography>
						<Profile
							userDetails={userDetails}
							actionEnable={false}
							showButton={false}
						/>
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
							<PostActionButtons position={false} article={postDetails} />
						</Stack>
						<Divider
							variant="fullWidth"
							flexItem
							sx={{ width: "100%", marginY: 2, alignSelf: "center" }}
						/>
					</Stack>
					{status === "loading" ? (
						<CircularProgress />
					) : (
						<ReactMarkdown
							remarkPlugins={[remarkGfm, remarkBreaks]}
							rehypePlugins={[rehypeRaw, rehypeHighlight]}
							className="reactMarkdown"
							parserOptions={{ commonmark: true }}
						>
							{data}
						</ReactMarkdown>
					)}
				</Container>
			</ThemeProvider>
		</>
	);
}

export default PostPage;

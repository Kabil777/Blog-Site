import { Stack, IconButton, Typography } from "@mui/material";
import { BiSolidLike } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateLikePost } from "../../store/reducers/getArticleCover";
import { GoBookmarkFill } from "react-icons/go";

function PostActionButtons({ position, article, url }) {
	console.log("article", article);
	const postDetails = useSelector(state => state.article.postDetails)
	console.log(postDetails)
	const dispatch = useDispatch()
	const Like = async () => {
		const response = await axios.get(
			`http://localhost:7000/post/like/${article.slug}`,
			{
				withCredentials: true,
			},
		);
		dispatch(updateLikePost({ ...response.data, slug: article.slug }))
	};
	const sharePost = () => {
		if (navigator.share) {
			navigator.share({
				title: article.title,
				text: article.description,
				url: url,
			})
				.catch((error) => console.log('Error sharing', error));
		}
	};
	return (
		<Stack
			direction="row"
			justifyContent={position ? "flex-start" : "flex-end"}
			alignItems="flex-end"
			gap="10px"
			width="50%"

		>
			<Stack direction="row" alignItems="flex-end" justifyContent="center">


				<IconButton onClick={Like} sx={{
					gap: "5px",
					width: "40px",
					borderRadius: "4px",
					height: "35px",
					color: article.isLiked ? "#2155CD" : "black",

				}}>
					<BiSolidLike />
					<Typography sx={{
						m: "0", paddingRight: "5px"
					}} alignSelf="center">
						{article?._count?.like || 0}
					</Typography>
				</IconButton>
			</Stack>
			<IconButton
				sx={{
					gap: "5px",
					borderRadius: "4px",
					height: "35px",
					color: "black",

				}}
			>
				<GoBookmarkFill size={20} />
			</IconButton>
			<IconButton onClick={sharePost} sx={{
				gap: "5px",
				borderRadius: "4px",
				height: "35px",
				color: "black",
			}} >
				<IoShareSocialSharp size={20} />
			</IconButton>
		</Stack>
	);
}

export default PostActionButtons;

import { Stack, IconButton, Typography } from "@mui/material";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import axios from "axios";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateLikePost } from "../../store/reducers/getArticleCover"

function PostActionButtons({ position, article }) {
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
	return (
		<Stack
			direction="row"
			justifyContent={position ? "flex-start" : "flex-end"}
			alignItems="center"
			gap="10px"
			width="50%"
			paddingX="8px"
		>
			<Stack direction="row" alignItems="flex-end" justifyContent="center">
				<Typography sx={{ m: "0", paddingRight: "5px" }} alignSelf="flex-end">
					{article?._count?.like || 0}
				</Typography>

				<IconButton onClick={Like} sx={{ color: article.isLiked ? "black" : "none" }}>
					<BiSolidLike size={23} />
				</IconButton>
			</Stack>
			<IconButton>
				<FaRegBookmark size={20} />
			</IconButton>
			<IconButton>
				<IoShareSocialSharp size={20} />
			</IconButton>
		</Stack>
	);
}

export default PostActionButtons;

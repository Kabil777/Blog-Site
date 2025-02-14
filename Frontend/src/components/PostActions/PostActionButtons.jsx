import { Stack, IconButton, Typography } from "@mui/material";
import { BiSolidLike } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateLikePost } from "../../store/reducers/getArticleCover";
import { GoBookmarkFill } from "react-icons/go";

function PostActionButtons({ position, article ,url}) {
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
			alignItems="center"
			gap="30px"
			width="50%"
			
		>
			<Stack direction="row" alignItems="flex-end" justifyContent="center">
				

				<IconButton onClick={Like} sx={{ 
					gap:"5px",
					border:"1px solid #e4e4e7",
					borderRadius:"4px",
					width:"70px",
					height:"35px",
					p:"5px 3px",
					borderColor: article.isLiked ? "#2155CD" : "#e4e4e7",
					color: article.isLiked ? "#2155CD" : "black" }}>
					<BiSolidLike size={21} />
					<Typography sx={{ 
					m: "0", paddingRight: "5px" }} alignSelf="flex-end">
					{article?._count?.like || 0}
				</Typography>
				</IconButton>
			</Stack>
			<IconButton
			sx={{
				gap:"5px",
					border:"1px solid #e4e4e7",
					borderRadius:"4px",
					width:"70px",
					height:"35px",
					p:"5px 3px",
					color:"black"
			}}
			>
				<GoBookmarkFill size={20} />
			</IconButton>
			<IconButton  onClick={sharePost} sx={{
				gap:"5px",
				border:"1px solid #e4e4e7",
				borderRadius:"4px",
				width:"70px",
				height:"35px",
				p:"5px 3px",
				color:"black"
				}} >
				<IoShareSocialSharp size={20} />
			</IconButton>
		</Stack>
	);
}

export default PostActionButtons;

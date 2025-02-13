import { Stack, IconButton, Typography } from "@mui/material";
import { GrLike } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import axios from "axios";

function PostActionButtons({ position, article }) {
	console.log("article", article);
	const Like = async () => {
		const response = await axios.get(
			`http://localhost:7000/post/like/${article.slug}`,
			{
				withCredentials: true,
			},
		);
		console.log(response);
	};
	return (
		<Stack
			direction="row"
			justifyContent={position ? "flex-start" : "flex-end"}
			alignItems="center"
			gap="30px"
			width="50%"
			
		>
			<IconButton onClick={Like} direction="row" alignItems="flex-end" justifyContent="center"
			sx={{
				gap:"5px",
				border:"1px solid #e4e4e7",
				borderRadius:"4px",
				width:"70px",
				height:"35px",
				p:"5px 3px",
				}}>
			<GrLike size={20} />
				<Typography sx={{ m: "0",fontSize:"1rem" }} alignSelf="flex-end">
					{article?._count?.like || 0}
				</Typography>	
			</IconButton >
			<IconButton sx={{
				gap:"5px",
				border:"1px solid #e4e4e7",
				borderRadius:"4px",
				width:"70px",
				height:"35px",
				p:"5px 3px",
				}} >
				<FaRegBookmark size={20} />
			</IconButton>
			<IconButton sx={{
				gap:"5px",
				border:"1px solid #e4e4e7",
				borderRadius:"4px",
				width:"70px",
				height:"35px",
				p:"5px 3px",
				}} >
				<IoShareSocialSharp size={20} />
			</IconButton>
		</Stack>
	);
}

export default PostActionButtons;

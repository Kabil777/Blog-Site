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
			gap="10px"
			width="50%"
			paddingX="8px"
		>
			<Stack direction="row" alignItems="flex-end" justifyContent="center">
				<Typography sx={{ m: "0" }} alignSelf="flex-end">
					{article?._count?.like || 0}
				</Typography>

				<IconButton onClick={Like} sx={{}}>
					<GrLike size={20} />
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

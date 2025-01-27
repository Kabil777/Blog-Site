import { Stack, IconButton } from "@mui/material"
import { GrLike } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

function PostActionButtons(position) {
	return (
		<Stack
			direction="row"
			justifyContent={position ? "flex-end" : "flex-start"}
			gap="10px"
			width="50%"
			paddingX="8px"
		>
			<IconButton>
				<GrLike size={20} />
			</IconButton>
			<IconButton>
				<FaRegBookmark size={20} />
			</IconButton>
			<IconButton>
				<IoShareSocialSharp size={20} />
			</IconButton>
		</Stack>

	)
}

export default PostActionButtons

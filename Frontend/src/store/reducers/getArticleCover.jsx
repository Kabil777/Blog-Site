import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostCover = createAsyncThunk(
	"home/posts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get("http://localhost:7000/post/", { withCredentials: true })
			if (!response) {
				throw new Error("Failed to fetch Post")
			}
			return response.data
		}
		catch (error) {
			return rejectWithValue(error)
		}
	})
const initialContent = {
	Articles: []
}

const getProfileCover = createSlice({
	name: "getArticles",
	initialState: initialContent,
	reducers: {
		setContent: (state, actions) => {
			state.Articles = actions.payload.Articles
		},
		updateLikePost: (state, actions) => {
			console.log(actions)
			const post = state.Articles.find((post) => post.slug === actions.payload.slug)
			if (post) {
				post._count.like = actions.payload.likes;
				post.isLiked = actions.payload.likedByUser;
			}
		}
	},
	extraReducers(builder) {
		builder.addCase(getPostCover.pending, (state) => {
			state.status = "loading"
		})
		builder.addCase(getPostCover.fulfilled, (state, action) => {
			state.status = "success"
			state.Articles = action.payload.data;
			console.log("status", state.status)
		})
		builder.addCase(getPostCover.rejected, (state) => {
			state.status = "rejected"
		})
	}
})


export const { getProfileCoverData, updateLikePost } = getProfileCover.actions;
export default getProfileCover.reducer

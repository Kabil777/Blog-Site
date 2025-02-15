import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSortedPosts = createAsyncThunk(
	"home/sortedPosts",
	async (sortByLikes = true, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`http://localhost:7000/post/?sortByLikes=${sortByLikes}`,
				{ withCredentials: true }
			);
			if (!response) {
				throw new Error("Failed to fetch sorted posts");
			}
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const initialContent = {
	MostLikedArticles:[],
	status: "idle",
};

const sortedPostSlice = createSlice({
	name: "sortedArticles",
	initialState: initialContent,
	reducers: {
		setContent: (state, actions) => {
			state.MostLikedArticles = actions.payload.Articles;
		},
		updateLikePost: (state, actions) => {
			const post = state.MostLikedArticles.find((post) => post.slug === actions.payload.slug);
			if (post) {
				post._count.like = actions.payload.likes;
				post.isLiked = actions.payload.likedByUser;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getSortedPosts.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(getSortedPosts.fulfilled, (state, action) => {
			state.status = "success";
			state.MostLikedArticles = action.payload.data;
		});
		builder.addCase(getSortedPosts.rejected, (state) => {
			state.status = "rejected";
		});
	},
});

export const { setContent, updateLikePost } = sortedPostSlice.actions;
export default sortedPostSlice.reducer;


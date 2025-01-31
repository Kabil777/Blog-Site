import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ArticleGetter = createAsyncThunk(
	"user/post",
	async ({ user, slug }, { rejectWithValue }) => {
		try {
			const articleData = await axios.get(
				`http://localhost:7000/fetchPost/@${user}/${slug}`,
				{
					withCredentials: true,
				},
			);
			if (!articleData) throw new Error("Failed to fetch Article");
			console.log(articleData);
			return articleData.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
const initialSlice = {
	userDetails: [],
	postDetails: [],
	tags: [],
	postContent: "",
};

const fetchArticles = createSlice({
	name: "Articles",
	initialState: initialSlice,
	reducers: {
		setArticle: (state, action) => {
			(state.userDetails = action.payload.userDetails),
				(state.postDetails = action.payload.postDetails),
				(state.tags = action.payload.tags),
				(state.postContent = action.payload.postContent);
		},
	},
	extraReducers(builder) {
		builder.addCase(ArticleGetter.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(ArticleGetter.fulfilled, (state, action) => {
			(state.status = "success"),
				(state.userDetails = action.payload.userDetails),
				(state.postDetails = action.payload.postDetails),
				(state.tags = action.payload.tags),
				(state.postContent = action.payload.postContent);
		});
		builder.addCase(ArticleGetter.rejected, (state) => {
			state.status = "rejected";
		});
	},
});

export const { setArticle } = fetchArticles.actions;
export default fetchArticles.reducer;

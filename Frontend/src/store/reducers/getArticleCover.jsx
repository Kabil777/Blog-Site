import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostCover = createAsyncThunk(
	"home/posts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get("http://localhost:7000/post", { withCredentials: true })
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
		}
	},
	extraReducers(builder) {
		builder.addCase(getPostCover.pending, (state) => {
			state.status = "loading"
		})
		builder.addCase(getPostCover.fulfilled, (state,action) => {
			state.Articles = action.payload.data;
			console.log("status",state.Articles)
			state.status = "success"
		})
		builder.addCase(getPostCover.rejected, (state) => {
			state.status = "rejected"
		})
	}
})


export const { getProfileCoverData } = getProfileCover.actions;
export default getProfileCover.reducer

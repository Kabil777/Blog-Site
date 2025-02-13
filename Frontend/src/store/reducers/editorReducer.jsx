import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import slugify from "slugify";

export const PostSend = createAsyncThunk(
	"/post/data",
	async (postData, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				"http://localhost:7000/post",
				postData,
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			if (!response) {
				throw new Error("Failed to upload your post");
			}
			console.log(postData);
			console.log(response.status);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
const initialPost = {
	postId: "",
	slug: "",
	title: "",
	description: "",
	tags: [],
	blog: "### Write Your Content here....",
	titleCover: "",
	likes: 0,
};
export const postCreate = createSlice({
	name: "handlePost",
	initialState: initialPost,
	reducers: {
		setForm: {
			reducer(state, action) {
				return { ...state, ...action.payload };
			},
			prepare(data) {
				const id = nanoid();
				const slug = slugify(data.title + `-${id}`, {
					lower: true,
					strict: true,
				});
				console.log(slug);
				return {
					payload: {
						postId: id,
						slug: slug,
						title: data.title,
						description: data.Desc,
						tags: data.tags,
					},
				};
			},
		},
		setData: (state, action) => {
			console.log(action.payload);
			state.blog = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(PostSend.fulfilled, (state, action) => {
				state.postId = "";
				state.slug = "";
				state.title = "";
				state.description = "";
				state.tags = [];
			})
			.addCase(PostSend.rejected, (state, action) => {
				console.log(action.error);
			});
	},
});

export const { setData, setForm } = postCreate.actions;
export default postCreate.reducer;

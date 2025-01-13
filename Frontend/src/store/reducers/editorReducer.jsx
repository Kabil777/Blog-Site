import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialPost = {
	id: "",
	title: "",
	description: "",
	tags: [],
	blog: "**Write Your Content here....**",
};
export const postCreate = createSlice({
	name: "handlePost",
	initialState: initialPost,
	reducers: {
		setForm: (state, action) => {
			(state.id = nanoid()),
				(state.title = action.payload.title),
				(state.description = action.payload.Desc),
				state.tags.push(action.payload.Tags);
		},
		setData: (state, action) => {
			state.blog = action.payload;
		},
	},
});

export const { setData, setForm } = postCreate.actions;
export default postCreate.reducer;

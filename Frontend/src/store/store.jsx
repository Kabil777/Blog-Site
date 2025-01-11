import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/editorReducer";
const store = configureStore({
	reducer: {
		post: postReducer,
	},
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/editorReducer";
import authReducer from "./reducers/authReducer";
const store = configureStore({
	reducer: {
		post: postReducer,
		auth: authReducer,
	},
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/editorReducer";
import authReducer from "./reducers/authReducer";
import articleReducer from './reducers/getArticles'
const store = configureStore({
	reducer: {
		post: postReducer,
		auth: authReducer,
		article: articleReducer
	},
});

export default store;

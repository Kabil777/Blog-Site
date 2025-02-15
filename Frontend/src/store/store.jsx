import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/editorReducer";
import authReducer from "./reducers/authReducer";
import articleReducer from './reducers/getArticles'
import articleCover from './reducers/getArticleCover'
import likearticleReducer from './reducers/getSortedbyLike'
const store = configureStore({
	reducer: {
		post: postReducer,
		auth: authReducer,
		article: articleReducer,
		cover: articleCover,
		sortLike: likearticleReducer, 

	},
});

export default store;

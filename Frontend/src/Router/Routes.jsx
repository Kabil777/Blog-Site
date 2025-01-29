import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import EditorPage from "../Pages/EditorPage";
import ProtectedChecker from "../hooks/ProtectedChecker";
import HomePage from "../Pages/HomePage";
import PostPage from "../Pages/PostPage";

function Routes() {
	const protectRoutes = [
		{
			path: "/editor",
			element: <EditorPage />,
		},

		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/post",
			element: <PostPage />,
		},
	];
	const Routes = useRoutes([
		...publicRoutes,

		{
			element: <ProtectedChecker />,
			children: protectRoutes,
		},
	]);

	return Routes;
}

export default Routes;

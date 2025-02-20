import { useLocation, useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import EditorPage from "../Pages/EditorPage";
import ProtectedChecker from "../hooks/ProtectedChecker";
import HomePage from "../Pages/HomePage";
import PostPage from "../Pages/PostPage";
import Navbar from "../components/Navbar/Navbar";

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

	return (
		<>
			{location.pathname !== "/login" && <Navbar />}
			{useRoutes([
				...publicRoutes,
				{
					element: <ProtectedChecker />,
					children: protectRoutes,
				},
			])}
		</>
	);
}

export default Routes;

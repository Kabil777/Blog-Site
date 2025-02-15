import LoginStack from "../components/Login/loginStackShare";
import PostPage from "../Pages/PostPage";
const publicRoutes = [
	{
		path: "/login",
		element: <LoginStack />,
	},
	{
		path: "/:user/:slug",
		element: <PostPage />,
	},
];

export default publicRoutes;

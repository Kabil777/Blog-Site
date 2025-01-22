import Login from "../components/Login/login";
import EditorPage from "../Pages/EditorPage";
const publicRoutes = [
	{
		path: "/editor",
		element: <EditorPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
];

export default publicRoutes;

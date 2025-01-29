import Login from "../components/Login/login";
import LoginStack from "../components/Login/loginStackShare";
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
	{
		path: "/loginstackshare",
		element: <LoginStack />,
	},
];

export default publicRoutes;

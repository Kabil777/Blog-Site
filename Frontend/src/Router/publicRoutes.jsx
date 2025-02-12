import LoginStack from "../components/Login/loginStackShare";
import EditorPage from "../Pages/EditorPage";
const publicRoutes = [
	{
		path: "/editor",
		element: <EditorPage />,
	},
	{
		path: "/loginstackshare",
		element: <LoginStack />,
	},
];

export default publicRoutes;

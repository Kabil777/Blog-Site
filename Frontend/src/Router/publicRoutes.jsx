import Login from "../components/Login/login";
import HomePage from "../Pages/HomePage";
const publicRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/",
		element: <HomePage />,
	},
];

export default publicRoutes;

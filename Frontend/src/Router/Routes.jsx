import { useRoutes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import publicRoutes from "./publicRoutes";

function Routes() {
	const Routes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		...publicRoutes,
	]);

	return Routes;
}

export default Routes;

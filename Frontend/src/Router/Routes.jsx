import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import EditorPage from "../Pages/EditorPage";
import ProtectedChecker from "../hooks/ProtectedChecker";
import HomePage from "../Pages/HomePage";

function Routes() {
	const protectRoutes = [
		{
			path: "/editor",
			element: <EditorPage />,
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

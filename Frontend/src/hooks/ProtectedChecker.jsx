import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function ProtectedChecker() {
	const auth = useSelector((state) => state.auth.authenticated);
	const location = useLocation();
	if (!auth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return (
		<>
			<Outlet />
		</>
	);
}

export default ProtectedChecker;

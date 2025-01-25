import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";

function ProtectedChecker() {
	const { status, auth } = useSelector((state) => state.auth);
	const location = useLocation();
	if (status) {
		return (
			<>
				<Container
					maxWidth="xl"
					fixed
					sx={{
						width: "100%",
						mt: "100px",
						overflowY: "hidden",
					}}
				>
					<CircularProgress />
				</Container>
			</>
		);
	}

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

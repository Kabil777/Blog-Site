import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";
import { useEffect } from "react";
import { getInitialCredits } from "../store/reducers/authReducer";

function ProtectedChecker() {
	const authenticated = useSelector((state) => state.auth.authenticated);
	const status = useSelector((state) => state.auth.status);
	const location = useLocation();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!(status == "success")) {
			const fetchAuth = () => {
				try {
					dispatch(getInitialCredits());
					console.log("Called");
				} catch (error) {
					console.error("Error during auth check:", error);
				}
			};
			fetchAuth();
		}
	}, [dispatch, status]);

	if (status == "loading") {
		return (
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<CircularProgress />
			</Container>
		);
	}

	if (!authenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
}

export default ProtectedChecker;

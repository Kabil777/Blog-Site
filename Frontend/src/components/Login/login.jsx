import { Box, Container, Stack, Typography } from "@mui/material";
import loginBg from "../../assets/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539.jpg";
import google from "../../assets/g.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialCredits } from "../../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { authenticated, status } = useSelector((state) => state.auth);

	useEffect(() => {
		if (authenticated && status === "success") {
			navigate("/"); // Redirect to the desired route after login
		}
		console.log("Calles...");
	}, [authenticated, status, navigate]);

	useEffect(() => {
		dispatch(getInitialCredits());
	}, [dispatch]);
	return (
		<Container
			maxWidth="xl"
			sx={{
				width: "100%",
				overflowY: "hidden",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}
		>
			<Stack
				direction="row"
				width="1400px"
				height="600px"
				border="2px solid #e4e4e7"
				borderRadius="10px"
			>
				<Box
					height="100%"
					width="60%"
					component="img"
					src={loginBg}
					borderRadius="10px 0 0 10px"
				></Box>
				<Stack
					direction="column"
					height="100%"
					width="40%"
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Typography
						variant="h6"
						component="h1"
						fontFamily="Teko"
						fontSize="3rem"
					>
						STACK SHARE
					</Typography>
					<Box
						height="10%"
						width="70%"
						border="2px solid #e4e4e7"
						component="button"
						backgroundColor="#ffffff"
						display="flex"
						alignItems="center"
						justifyContent="space-evenly"
						mt="30%"
						onClick={() => {
							window.location.href = "http://localhost:7000/auth/google";
						}}
					>
						<Box component="img" height="80%" width="12%" src={google}></Box>
						<Typography variant="h6" fontFamily="Inter" color="#6e6e67">
							Log in with Google
						</Typography>
					</Box>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Login;

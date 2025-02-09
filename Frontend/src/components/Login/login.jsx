import { Box, Container, Stack, Typography } from "@mui/material";
import loginBg from "../../assets/front.jpg";
import google from "../../assets/g.jpg";
import github from "../../assets/github.png";


function Login() {
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
			  padding:"0",
				margin:"0",
				'@media (min-width: 600px)': {
					paddingLeft: '0px',
					paddingRight: '0px',
				}
			}}
		>
			<Stack
				direction="row"
				width="100%"
				height="100%"
				sx={{
					
					backgroundColor:"#2155CD"
				}}
			>
				<Stack
					height="100%"
					width="60%"
					textAlign={"left"}
					display={"flex"}
					alignItems={"center"}
				justifyContent={"center"}
				>
				<Box
					component="img"
					src={loginBg}
					width={450}
					borderRadius="500px"
					height={450}
					>
				</Box>
				</Stack>
				<Stack
					direction="column"
					height="100%"
					width="40%"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent:"end",
						backgroundColor:"white"
					}}
				><Box><input type="text" placeholder="username"/></Box>
				<Box>password</Box>
					or
					<Stack
							direction="column"
							height={120}
							margin={6}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent:"space-between",
							}}					
					>
					<Box
						width="70%"
						border="2px solid #e4e4e7"
						borderRadius={3}
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
					<Box

						width="70%"
						border="2px solid #e4e4e7"
						borderRadius={3}
						component="button"
						backgroundColor="#ffffff"
						display="flex"
						alignItems="center"
						justifyContent="space-evenly"
						
					>
						<Box component="img" height="80%" width="12%" src={github}></Box>
						<Typography variant="h6" fontFamily="Inter" color="#6e6e67">
							Log in with Github
						</Typography>
					</Box>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Login;

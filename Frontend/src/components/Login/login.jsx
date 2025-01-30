import { Box, Container, Stack, TextField, Button, Typography } from "@mui/material";
import google from "../../assets/g.jpg";
import github from "../../assets/github.png";
import icoon from "../../assets/icons odf stack.jpg";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import img1 from "../../assets/4575.jpg";
import img2 from "../../assets/5037367.jpg";
import img3 from "../../assets/7124027.jpg";
import img4 from "../../assets/front.jpg";
import MultipleSnackbars from "../Snackbar/Snackbar";

const images = [img1, img2, img3, img4];

function Login() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
	return (
		
		<Container disableGutters
			maxWidth="100%"
			sx={{
				
				overflowY: "hidden",
				height: "100vh",
				backgroundColor:"#065AD7",
				
				display: "flex",
			  padding:"0",
				margin:"0",
			}}	
		><MultipleSnackbars 

		openSnackbar={openSnackbar} 
		snackbarMessage={snackbarMessage} 
		snackbarType={snackbarType} 
		handleCloseSnackbar={handleCloseSnackbar} 
		/>
			<Stack /* left side body */
			sx={{
				
				backgroundColor:"white",
				width:"40%",
				justifyContent:"center",
				alignItems:"center"
			}}
			>
				<Stack /*content of left side*/sx={{width:"60%",gap:"3rem"}} >
				<Stack /*logo and name*/
				sx={
					{
						width:"auto",
						display:"flex",
						flexDirection:"row",
						alignItems:"center",
						gap:"1%"
					}
				}
				><Box component="img" height="80%" width="8%" src={icoon} borderRadius="20%"></Box>
				<Stack /*name*/><Typography variant="h6" fontFamily="Inter" color="#1357B3" fontWeight="bold">Stack Share</Typography></Stack>
				</Stack>
				<Stack /*login in method*/ sx={{gap:"5px"}}>
					<Typography variant="h5" fontFamily="" color="#2E2F39" fontWeight="bold" textAlign="left">Log In to Your Account</Typography>
					<Typography  fontFamily="Inter" color="#A9A9AB" fontSize="70%" fontWeight="bold" textAlign="left">Welcome back! Select method to log In</Typography>
				</Stack>
				<Stack /*googling and githubing*/ 
				sx={{
					display:"flex",
					flexDirection:"row",
					gap:"3%"
				}}>
					<Stack /*google*/ sx=
					{{
					display:"flex",
					flexDirection:"row",
					alignItems:"center",
					gap:"0.8rem",
					border:"2px solid #F7F7F7",
					borderRadius:"10%",
					justifyContent:"center",
					width:"40%",
					height:"90%"
					}}>
						<Stack component="img" sx={{aspectRatio:1}} width="15%" src={google}></Stack>
						<Typography fontSize="80%" fontFamily="Inter" color="#6e6e67" fontWeight="bold">Google</Typography>
					</Stack>
					
					<Stack /*git*/ sx=
					{{
					display:"flex",
					flexDirection:"row",
					alignItems:"center",
					gap:"0.8rem",
					border:"2px solid #F7F7F7",
					borderRadius:"10%",
					justifyContent:"center",
					width:"40%",
					height:"90%"
					}}onClick={() => handleSnackbar("GitHub login feature is not implemented yet!", "failure")}>
						<Stack component="img" sx={{aspectRatio:1}} width="15%" src={github}></Stack>
						<Typography fontSize="80%" fontFamily="Inter" color="#6e6e67" fontWeight="bold">Github</Typography>
					</Stack>
				</Stack> 
				<Stack /*hr or */>
				<Box sx={{display: "flex", alignItems: "center", width: "90%",}}>
                        <Box /* Left line */sx={{flex: 1, height: "1px",backgroundColor: "#F6F6F6",}}/>
                        <Typography /* Text */sx={{marginX: 2,whiteSpace: "nowrap", fontSize:"60%", color:"#BEBFC1"}}>Or Continue with Email</Typography>
                        <Box /* Right line */sx={{flex: 1, height: "1px", backgroundColor: "#F6F6F6",}}/>
    </Box>
				</Stack>
				<Stack sx={{gap:"0.8rem"}}>
				<Stack /* Usename */ sx={{border:"2px solid #F9F9F9", width:"80%",display:"flex",flexDirection:"row" ,alignItems:"center"}} >
				<MdOutlineMail style={{fontSize:"20px" , color:"gray"}} />
				<TextField placeholder="Email " variant="outlined" 
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none',
							width:"100rem"
						},
					},
				}}></TextField>
				</Stack>
				<Stack /* Password */ sx={{border:"2px solid #F9F9F9", width:"80%",display:"flex",flexDirection:"row" ,alignItems:"center"}} >
				<CiLock 
				style={{fontSize:"20px" , color:"gray"}} />
				<TextField placeholder="Password" variant="outlined" 
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none',
							width:"100rem"
						},
					},
				}}></TextField>
				</Stack>
				<Stack /* remember and forget*/ sx={{width:"80%",display:"flex",flexDirection:"row" ,alignItems:"center",justifyContent:"space-between"}}>
				<Stack /* Checkbox and remeber me */sx={{color:"#E1E5E7"}}><Typography>Remember Me</Typography></Stack>
				<Stack /* Forgetme */sx={{color:"#0759D7"}}><Typography>Forget Password?</Typography></Stack>
				</Stack>
				</Stack>
				<Button variant="contained" sx={{width:"80%"}}>Log In </Button>
				<Stack 
				sx={{width:"80%",
				display:"flex",
				flexDirection:"row" ,
				alignItems:"center" ,
				gap :"0.6rem", 
				justifyContent:"center"
				}}>
					<Typography>Dont Have An Account ?</Typography><Typography sx={{color:"#0759D7"}}>Create an Account</Typography></Stack> 
				</Stack>
				
			</Stack>
			<Stack sx={{ width:"60%",
				alignItems:"center",justifyContent:"center"
			}}>
			<Box
			borderRadius="50%"
      sx={{
        position: "relative",
        width: "50%",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
		aspectRatio:1
		
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: `${(index - currentIndex) * 100}%`, // Position images based on the current index
            width: "100%",
            height: "100%",
            transition: "left 1s ease-in-out", // Smooth transition for sliding effect
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure image fits the container
            }}
          />
        </Box>
      ))}
    </Box>
			</Stack>
		</Container>
	);
}

export default Login;

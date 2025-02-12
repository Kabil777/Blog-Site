import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import img1 from "../../assets/4575.jpg";
import img2 from "../../assets/5037367.jpg";
import img3 from "../../assets/7124027.jpg";
import img4 from "../../assets/front.jpg";
const images = [
img1,img2,img3,img4
  ];
function LoginStack() {
	const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
	
	  useEffect(() => {
		const interval = setInterval(() => {
		  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
		}, 4000); // 3 seconds display + 1 second for transition
	
		return () => clearInterval(interval); // Cleanup interval on unmount
	  }, []);	
      return (
          <>
              <Container
                  maxWidth="xl"
                  sx={{
                      padding: "24px",
                      width: "100%",
                      display: "flex",
                      height: "100vh",
                      overflow: "hidden",
                  }}
              >


            <Stack /* left side body */
			sx={{
                width: "40%",
				backgroundColor:"white",
				justifyContent:"center",
				alignItems:"center",
				borderRadius:"10px 0px 0px 10px",
				border:"1px solid #e4e4e7",
			}}
			>
			<Stack /*content of left side*/sx={{
				gap:"25px",
                width: "350px",
            }} >


				<Stack /*logo and name*/
					sx={
						 {
							display:"flex",
							flexDirection:"row",
							alignItems:"center",
							textAlign:"center",
							justifyContent:"center",
						 }
						}>

				    <Stack /*name*/>
                        <Typography fontSize="40px" fontFamily="Teko" color="#1357B3" fontWeight="medium" padding="10px 0 0 0">Stack Share</Typography>
                    </Stack>

				</Stack>


				<Stack /*login in method*/ sx={{gap:"5px"}}>
					<Typography variant="h5" fontFamily="Inter" color="#2E2F39" fontWeight="bold" textAlign="left">
						Log In to Your Account
					</Typography>
					<Typography  fontFamily="Inter" color="#A9A9AB" fontSize="70%" fontWeight="bold" textAlign="left">
						Welcome back! Select method to log In
					</Typography>
				</Stack>


            <Stack /*googling and githubing*/ 
				sx={{
					userSelect:"none",
					userDrag:"none",
					display:"flex",
					flexDirection:"row",
					gap:"25px"
				}}>
				<Button variant="contained"
				onClick={()=>{window.location.href="http://localhost:7000/auth/google"}}
				 sx={{
					display:"flex",
					flexDirection:"row",
					backgroundColor:"white",
					border:"2px solid #F7F7F7",
					borderRadius:"4px",
                    width:"100%",
                    height:"50px",
					alignItems:"center",
					justifyContent:"center",
					gap:"10px",
					boxShadow:"none",
					textTransform:"none",
					'&:hover': {
						boxShadow: 'none',
					},
					'&:active': {
						boxShadow: 'none',
					},
					}}>
						<Stack component="img" sx={{aspectRatio:1}} width="20px" height="21px" src={google} ></Stack>
						<Typography fontSize="16px" fontFamily="Inter" color="#6e6e67" fontWeight="medium">Goolge</Typography>
				</Button>

				<Button variant="contained" sx={{
					display:"flex",
					flexDirection:"row",
					backgroundColor:"white",
					border:"2px solid #F7F7F7",
					borderRadius:"4px",
                    width:"100%",
                    height:"50px",
					alignItems:"center",
					justifyContent:"center",
					gap:"10px",
					boxShadow:"none",
					textTransform:"none",
					'&:hover': {
						boxShadow: 'none',
					},
					'&:active': {
						boxShadow: 'none',
					},
					}}>
						<Stack component="img" sx={{aspectRatio:1}} width="20px" height="20px" src={github}></Stack>
						<Typography fontSize="16px" fontFamily="Inter" color="#6e6e67" fontWeight="medium">Github</Typography>
				</Button>

			</Stack>



				<Stack sx={{gap:"25px"}}>

                <Stack /*hr or */>
				<Box sx={{display: "flex", alignItems: "center", width: "100%",}}>
                        <Box /* Left line */sx={{flex: 1, height: "1px",backgroundColor: "#e4e4e7",}}/>
                            <Typography /* Text */sx={{ marginX: 2, whiteSpace: "nowrap", fontSize:"12px", color:"#BEBFC1",fontWeight:"medium"}}> Or Continue with Email </Typography>
                            <Box /* Right line */sx={{flex: 1, height: "1px", width: "100%", backgroundColor: "#e4e4e7",}}/>
                        </Box>
				</Stack>
				
				<Stack /* Usename */
                 sx={{  
                    width:"100%",
					height:"auto",
                    display:"flex",
                    flexDirection:"row" ,
                    alignItems:"center",
                    }} >

				<TextField placeholder="Email " variant="outlined" type="email" required
				sx={{
					'& .MuiOutlinedInput-root': {
						paddingLeft: '25px',
                        color:"#67676E",
						border:"1px solid #e4e4e7",
						"&:hover": {
							borderColor: "#2155CD",
						},
						
						"& fieldset": {
							border:"none",
						}

					},
                    borderRadius:"4px", 
                    width:"100%",
					height:"auto",	
				}}></TextField>

				</Stack>
				<Stack>
				<Stack /* Password */ sx={{
                    width:"100%",
                    display:"flex",
                    flexDirection:"row" ,
                    alignItems:"center"
                    }} >
				<TextField placeholder="Password" variant="outlined" type="password" required
				sx={{
					'& .MuiOutlinedInput-root': {
						paddingLeft: '25px',
                        color:"#67676E",
						border:"1px solid #e4e4e7",
						"&:hover": {
							borderColor: "#2155CD",
						},
						"& fieldset": {
							border:"none",
						}

					},
                    borderRadius:"4px", 
                    width:"100%",
					height:"auto",	
				}}>
                </TextField>
				</Stack>
				<Stack /* remember and forget*/ sx={{
                    width:"100%",
                    display:"flex",
                    flexDirection:"row" ,
                    alignItems:"center",
					justifyContent:"space-between"}}
                    >
				<Stack sx={{
				}} /* Checkbox and remeber me */>
				<FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
				</Stack>
				<Stack /* Forgetme */>
                    <Link href=""><Typography sx={{fontSize:"14px", color:"#2155CD",textDecoration:"underline"}}>Forget Password?</Typography>
					</Link>
				</Stack>
				</Stack>
				</Stack>
				</Stack>
				<Button variant="contained" type="submit" sx={{width:"100%",backgroundColor:"#2155CD",height:"50px"}}>Log In </Button>

				<Stack sx={{width:"100%",display:"flex",flexDirection:"row" ,alignItems:"center" ,gap :"0.6rem",justifyContent:"space-between"}}>
                    <Typography sx={{
                        fontSize:"14px", 
                        color:"#67676E"
                    }}>Dont have an Account ?</Typography>
                    <Typography sx={{fontSize:"14px", color:"#2155CD",textDecoration:"underline"}}>Create an Account</Typography>
                </Stack> 
				</Stack>
                
				
			</Stack>

            <Stack /* right side body */
            sx={{
                width: "60%",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#2155CD",
				borderRadius:"0px 10px 10px 0px",
            }}
            >
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
							  objectFit: "cover",
							}}
						  />
						</Box>
					  ))}
					</Box>
            </Stack>
              </Container>
          </>
      );
  }
  
  export default LoginStack;
  
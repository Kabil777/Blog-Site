import { AiOutlineEdit } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import {
	AppBar,
	Avatar,
	Card,
	Divider,
	IconButton,
	InputBase,
	Popover,
	Stack,
	Toolbar,
	Typography,
	SwipeableDrawer,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppBarTheme from "./NavbarTheme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import Profile from "../profile/profile";
function Navbar() {
	const navigate = useNavigate();
	const [anchor, setAnchor] = useState(null);
	const [ResourceOpen, setOpen] = useState(null);
	const openResource = Boolean(ResourceOpen);
	const open = Boolean(anchor);
	const openReq = (event) => {
		setAnchor(event.currentTarget);
	};
	const closeReq = () => {
		setAnchor(null);
	};
	return (
		<>
			<ThemeProvider theme={AppBarTheme}>
				<AppBar color="inherit">
					<Toolbar>
						<Stack
							direction="row"
							spacing={2}
							alignItems="center"
							sx={{ flexGrow: 1 }}
						>
							<Typography
								variant="h6"
								component="h1"
								sx={{ textAlign: "center" }}
							>
								STACK SHARE
							</Typography>
							<Divider orientation="vertical" variant="middle" flexItem />
							<Typography
								variant="button"
								fontFamily="Inter"
								fontSize="1.1rem"
								fontWeight="400"
								textTransform="none"
								sx={{
									color: "#67676e",
									cursor: "pointer",
								}}
								paddingX="10px"
								onClick={() => {
									navigate("/");
								}}
							>
								Home
							</Typography>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="center"
								onMouseEnter={(event) => setOpen(event.currentTarget)}
								onMouseLeave={() => setOpen(null)}
								aria-owns={openResource ? "mouse-over-popover" : undefined}
								aria-haspopup="true"
							>
								<Typography
									variant="button"
									paddingX="10px"
									fontFamily="Inter"
									fontSize="1.1rem"
									fontWeight="400"
									textTransform="none"
									color="#67676e"
								>
									Resources
								</Typography>
								<RiArrowDropDownLine style={{ marginTop: "5px" }} size={25} />
								<Popover
									anchorEl={ResourceOpen} // Ensure ResourceOpen is null or a DOM element
									anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
									transformOrigin={{
										vertical: "top",
										horizontal: "center",
									}}
									id="mouse-over-popover"
									open={openResource}
									onClose={() => setOpen(null)}
									PaperProps={{
										onMouseEnter: () => setOpen(ResourceOpen),
										onMouseLeave: () => setOpen(null),
										sx: {
											boxShadow: "none",
										},
									}}
								>
									<SwipeableDrawer
										anchor="left"
										open={open}
										onClose={openReq} // Ensure this prop is passed
										onOpen={closeReq} // Ensure this prop is passed
									/>
								</Popover>
							</Stack>
						</Stack>

						<Stack
							direction="row"
							alignItems="center"
							justifyContent="center"
							height="70%"
							width="20%"
							m="0px 25px"
							border="1.5px solid #e4e4e7"
							borderRadius="1%"
							p="0px 5px"
						>
							<InputBase
								sx={{ ml: 1, flex: 1 }}
								placeholder="Search for Articles..."
								inputProps={{ "aria-label": "Search for Articles" }}
							/>
							<IconButton
								type="button"
								aria-label="search"
								sx={{
									padding: "10px",
									fontSize: "2em",
									fontWeight: "600",
									height: "40px",
									width: "40px",
									color: "#67676e",
									backgroundColor: "#ffffff",
									"&:hover": {
										backgroundColor: "#ffffff",
									},
								}}
							>
								<CiSearch />
							</IconButton>
						</Stack>

						<Stack
							direction="row"
							alignItems="center"
							spacing={2}
							sx={{ flexGrow: 0 }}
						>
							<IconButton
								aria-label="editor"
								onClick={() => {
									navigate("/editor");
								}}
							>
								<AiOutlineEdit size={25} />
							</IconButton>
							<IconButton>
								<IoNotifications size={22} />
							</IconButton>
							<IconButton
								aria-haspopup="true"
								onClick={openReq}
								aria-controls={open ? "menu" : undefined}
								aria-expanded={open ? "true" : undefined}
							>
								<Avatar
									sx={{
										width: "100%",
										height: "100%",
										bgcolor: "#2155CD",
									}}
								>
									K
								</Avatar>
							</IconButton>
						</Stack>
					</Toolbar>
				</AppBar>
			</ThemeProvider>{" "}
			<Menu
				anchorEl={anchor}
				id="menu"
				open={open}
				onClose={closeReq}
				sx={{ maxWidth: "400px", boxShadow: "none" }}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 50,
								height: 50,
							},
							"&::before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem
					onClick={closeReq}
					sx={{
						padding: "5px",
					}}
				>
					<Card
						sx={{
							boxShadow: "none",
							backgroundColor: "#e4e4e7",
							width: "300px",
							height: "75px",
							"& .MuiCardHeader-action": {
								display: "none",
							},
						}}
					>
						<Profile />
					</Card>
				</MenuItem>

				<MenuItem onClick={closeReq}>
					<ListItemIcon>
						<IoPersonAddSharp fontSize="small" />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem onClick={closeReq}>
					<ListItemIcon>
						<IoMdSettings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<Divider />
				<MenuItem onClick={closeReq}>
					<ListItemIcon>
						<IoLogOutSharp fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}

export default Navbar;

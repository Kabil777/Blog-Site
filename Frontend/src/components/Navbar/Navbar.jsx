import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import {
	AppBar,
	Avatar,
	Button,
	Card,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Toolbar,
	Typography,
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
	const open = Boolean(anchor);
	const openReq = (event) => {
		setAnchor(event.currentTarget);
	};
	const closeReq = () => {
		setAnchor(null);
		console.log(open);
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
							<Button
								type="button"
								variant="text"
								disableRipple
								onClick={() => {
									navigate("/");
								}}
							>
								Home
							</Button>
							<Button
								variant="text"
								endIcon={<RiArrowDropDownLine size={25} />}
								disableRipple
								disableElevation
							>
								Resources
							</Button>
						</Stack>

						<Stack
							direction="row"
							alignItems="center"
							justifyContent="flex-end"
							sx={{ flexGrow: 2 }}
						>
							<TextField
								sx={{ width: "60ch", marginRight: "70px" }}
								variant="outlined"
								placeholder="Find Articles..."
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<CiSearch size={25} />
										</InputAdornment>
									),
								}}
							/>
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

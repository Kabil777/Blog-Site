import {
	Dialog,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
	IconButton,
	Tabs,
	Tab,
	Stack,
	Box,
	Chip,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { BsPinAngleFill } from "react-icons/bs";
import { setForm } from "../../store/reducers/editorReducer";
import { useState } from "react";
import chips from "./chip";
import { TiDelete } from "react-icons/ti";
import MultipleSnackbars from "../Snackbar/Snackbar";

function Form({ open, closeReq }) {
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState(0);
	const [tag, tagSetter] = useState([]);
	const [clickedChips, setClickedChips] = useState([]);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleTabChange = (_, newValue = 1) => {
		setActiveTab(
			newValue !== null ? newValue : (prevTab) => Math.min(prevTab + 1, 1),
		);
	};
	const sendHeadders = (formJson) => {
		dispatch(setForm(formJson));
	};

	const clickAction = (name) => {
		setClickedChips((prevClicked) => {
			if (prevClicked.some((chip) => chip.name === name)) {
				return prevClicked;
			}
			return [...prevClicked, { name, isClicked: true }];
		});
		tagSetter((prevTag) => [...prevTag, name]);
	};

	const deleteAction = (name) => {
		setClickedChips((prevClicked) =>
			prevClicked.filter((chip) => chip.name !== name),
		);
		tagSetter((prevTag) => prevTag.filter((tag) => tag !== name));
	};

	return (
		<>
			<Dialog
				open={open}
				onClose={(event, reason) => {
					if (reason !== "backdropClick") closeReq();
				}}
				disableEscapeKeyDown
				fullWidth
				sx={{
					"& .MuiDialogContent-root": {
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						paddingTop: "0px",
					},
					"& .MuiTextField-root": {
						margin: "15px 0px",
					},
					"& .MuiDialogContentText-root": {
						color: "#000000",
					},
					"& .MuiPaper-root": {
						height: "550px",
						maxWidth: "500px",
					},
				}}
				PaperProps={{
					component: "form",
					onSubmit: (e) => {
						e.preventDefault();
						const formData = new FormData(e.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						formJson.tags = tag;
						console.log("Form Submission:", formJson);
						sendHeadders(formJson);
						closeReq();
					},
				}}
			>
				<DialogTitle
					fontSize="1.5em"
					fontWeight="600"
					fontFamily="Lato"
					sx={{ mt: "10px" }}
				>
					<IconButton
						sx={{ border: "2px solid #e4e4e7" }}
						disableFocusRipple
						disableTouchRipple
					>
						<BsPinAngleFill />
					</IconButton>{" "}
					Article Headers
				</DialogTitle>
				<Tabs
					value={activeTab}
					onChange={handleTabChange}
					sx={{ ml: "25px", mb: "15px" }}
				>
					<Tab
						label="Title"
						wrapped
						sx={{ fontSize: "0.9rem", fontWeight: "600", fontFamily: "Lato" }}
					/>
					<Tab
						label="Tags"
						sx={{ fontSize: "0.9rem", fontWeight: "600", fontFamily: "Lato" }}
					/>
				</Tabs>
				<div
					style={{ width: "100%", height: "345px" }}
					hidden={activeTab !== 0}
				>
					<DialogContent>
						<DialogContentText>Title for your Article </DialogContentText>
						<TextField
							required
							name="title"
							label="Title"
							fullWidth
							variant="outlined"
						></TextField>
					</DialogContent>
					<DialogContent>
						<DialogContentText>Description for your Article</DialogContentText>
						<TextField
							required
							name="Desc"
							label="Description"
							fullWidth
							variant="outlined"
							multiline
							rows={5}
						></TextField>
					</DialogContent>
				</div>
				<div
					style={{ width: "100%", height: "345px" }}
					hidden={activeTab !== 1}
				>
					<DialogContent>
						<DialogContentText>Choose Tags for your Article</DialogContentText>
						<Stack
							direction="row"
							flexWrap="wrap"
							sx={{
								height: "275px",
								border: "1px solid #e4e4e7",
								m: "15px 0px",
								p: "5px 20px",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								overflowY: "scroll",
								scrollbarWidth: "none",
								"& .MuiChip-root": {
									borderRadius: "2px",
									backgroundColor: "#eef5ff",
									color: "#2155cd",
									fontWeight: "600",
									width: "120px",
									"& .MuiChip-icon": {
										color: "#2155cd",
									},
								},
							}}
						>
							{chips.map((chip) => {
								const isClicked = clickedChips.some(
									(clicked) => clicked.name === chip.name,
								);
								const icon = chip.icon;

								return (
									<Box key={chip.key} sx={{ m: "15px 5px", height: "25px" }}>
										<Chip
											icon={icon}
											label={chip.name}
											sx={{
												fontSize: "1rem",
												border: isClicked ? "1.5px solid #2155cd" : undefined,
											}}
											clickable={!isClicked}
											onClick={() => clickAction(chip.name)}
											onDelete={
												isClicked ? () => deleteAction(chip.name) : undefined
											}
											deleteIcon={<TiDelete color="#2155cd" />}
										/>
									</Box>
								);
							})}
						</Stack>
					</DialogContent>
				</div>
				<DialogActions>
					<Button onClick={closeReq} sx={{ fontWeight: "600" }}>
						Cancel
					</Button>
					{activeTab === 1 ? (
						<Button
							type="submit"
							variant="contained"
							sx={{
								backgroundColor: "#2155cd",
								boxShadow: "none",
								fontFamily: "Inter",
								fontWeight: "600",
							}}
						>
							Update
						</Button>
					) : (
						<Button
							type="button"
							onClick={() => handleTabChange()}
							variant="contained"
							sx={{
								backgroundColor: "#2155cd",
								boxShadow: "none",
								fontFamily: "Inter",
								fontWeight: "600",
							}}
						>
							Next
						</Button>
					)}
				</DialogActions>
			</Dialog>

			<MultipleSnackbars
				openSnackbar={openSnackbar}
				handleCloseSnackbar={() => setOpenSnackbar(false)}
			/>
		</>
	);
}

export default Form;

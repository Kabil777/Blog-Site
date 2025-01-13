import {
	Dialog,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
	IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BsPinAngleFill } from "react-icons/bs";
import { setForm } from "../../store/reducers/editorReducer";
function Form({ open, closeReq }) {
	const dispatch = useDispatch();
	const sendHeadders = (formJson) => {
		dispatch(setForm(formJson));
	};
	return (
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
			}}
			PaperProps={{
				component: "form",
				onSubmit: (e) => {
					e.preventDefault();
					const formData = new FormData(e.currentTarget);
					const formJson = Object.fromEntries(formData.entries());
					console.log(formJson);
					sendHeadders(formJson);
					closeReq();
				},
			}}
		>
			<DialogTitle fontSize="1.2em" fontWeight="600">
				<IconButton sx={{ border: "2px solid #e4e4e7" }}>
					<BsPinAngleFill />
				</IconButton>{" "}
				ARTICLE HEADERS
			</DialogTitle>
			<DialogContent>
				<DialogContentText>Title for your Article </DialogContentText>
				<TextField
					required
					name="title"
					label="Title"
					fullWidth
					variant="standard"
				></TextField>
			</DialogContent>
			<DialogContent>
				<DialogContentText>Choose Tags for your Article</DialogContentText>
				<TextField
					required
					name="Tags"
					label="Tags"
					fullWidth
					variant="standard"
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
					rows={6}
				></TextField>
			</DialogContent>{" "}
			<DialogActions>
				<Button onClick={closeReq} sx={{ fontWeight: "600" }}>
					Cancel
				</Button>
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
			</DialogActions>
		</Dialog>
	);
}

export default Form;

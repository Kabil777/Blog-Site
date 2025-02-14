import pythonImage from "../../assets/1_rSdN-ErriXyyU45XH96RMA 1.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
	return (
		<Card
			sx={{
				height: "450px",
				display: "flex",
				flexDirection: "column",
				boxShadow: "none",
				border: "0.0625rem solid #ccc",
				width: "100%",
				paddingBottom: "0.825rem",
			}}
		>
			<CardMedia
				sx={{
					height: "80%",
					objectFit: "contain",	
				}}
				image={pythonImage}
				title="Python Image"
			/>
			<CardContent
				sx={{
					flexGrow: 1,
					padding:"1rem 1rem 0 1rem",
				}}
			>
				<Typography
					gutterBottom
					variant="h4"
					component="div"
					sx={{
						fontWeight: "bold",
						fontSize: "1.0625rem",
						marginBottom: "0",
						fontFamily: "inter",
						textAlign: "left",
					}}
				>
					PYTHON
				</Typography>
				<Typography
					variant="body2"
					sx={{
						color: "black",
						fontWeight: "600",
						fontSize: "0.75rem",
						textAlign: "left",
					}}
				>
					DATA STRUCTURES | BIG DATA
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					padding:"0rem 1rem",
				}}
			>
				<Button
					size="small"
					startIcon={<FaPython style={{ fontSize: "0.8rem" }} />}
					sx={{
						fontSize: "0.6rem",
						borderRadius: "2px",
						fontWeight: "800",
						padding: "0.1875rem .65rem",
						boxShadow: "none",
						gap: "5px",
						"&:hover": {
							boxShadow: "none",
						},
						backgroundColor:  "#EEF5FF",
						color:"#2155CD",
						"& .MuiButton-startIcon": {
							margin: "0",
						}
					}}
				>
					Python
				</Button>
				<Button
					size="small"
					startIcon={<AiOutlineKubernetes style={{ fontSize: "0.8rem" }} />}
					sx={{
						fontSize: "0.6rem",
						borderRadius: "2px",
						fontWeight: "800",
						padding: "0.1875rem .65rem",
						boxShadow: "none",
						gap: "5px",
						"&:hover": {
							boxShadow: "none",
						},
						backgroundColor:  "#EEF5FF",
						color:"#2155CD",
						"& .MuiButton-startIcon": {
							margin: "0",
						}
					}}
				>
					Data Structures
				</Button>
			</CardActions>
		</Card>
	);
}

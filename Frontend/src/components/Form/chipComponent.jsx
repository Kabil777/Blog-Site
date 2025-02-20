import { Chip } from "@mui/material";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { useSelector } from "react-redux";

function ChipComponent() {
	const tags = useSelector((state)=>state.article.tags)
	console.log(tags)	
	const icons = {
		Python:<FaPython/>,
		Java:<FaJava size={20}/>,
		rust:<FaRust/>,
		Go:<FaGolang size={20}/>
	}
	return (
		tags.map((tag) => {
		return (
			<Chip
				key={tag.id}
				icon={icons[tag.tag.skill] || null}	
				label={tag.tag.skill}
				sx={{
					fontSize: "0.9rem",
					border: "1.5px solid #2155cd",
					borderRadius: "2px",
					backgroundColor: "#ffffff",
					color: "#2155cd",
					fontWeight: "600",
					width: "100px",
					justifyContent:"space-evenly",
					"& .MuiChip-icon": {
						color: "#2155cd",
					},
					cursor: "default",
				}}
				
			/>
		);
	}));
}

export default ChipComponent;

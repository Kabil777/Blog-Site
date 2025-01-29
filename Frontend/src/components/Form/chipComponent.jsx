import { Chip } from "@mui/material";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";

function ChipComponent() {
	const chips = [
		{
			key: 1,
			name: "Python",
			icon: <FaPython />,
		},
		{
			key: 2,
			name: "Java",
			icon: <FaJava />,
		},
		{
			key: 3,
			name: "Rust",
			icon: <FaRust />,
		},
	];

	return chips.map((chip) => {
		return (
			<Chip
				key={chip.key}
				icon={chip.icon}
				label={chip.name}
				sx={{
					fontSize: "0.9rem",
					border: "1.5px solid #2155cd",
					borderRadius: "2px",
					backgroundColor: "#ffffff",
					color: "#2155cd",
					fontWeight: "600",
					width: "100px",
					"& .MuiChip-icon": {
						color: "#2155cd",
					},
					cursor: "default",
				}}
			/>
		);
	});
}

export default ChipComponent;

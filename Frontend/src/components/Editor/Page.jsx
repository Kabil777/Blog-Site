import { useEffect, useState } from "react";
import MDEditor, { commands, executeCommand } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./Page.css";
import { BsStars, BsTable } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineTextFields } from "react-icons/md";
import { FaBold, FaItalic, FaLink } from "react-icons/fa";
import { LuCode, LuCodeXml } from "react-icons/lu";
import { VscChecklist } from "react-icons/vsc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosImages } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { HiViewfinderCircle } from "react-icons/hi2";
import { MdOutlineViewCarousel } from "react-icons/md";

import { setData } from "../../store/reducers/editorReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Form from "../Form/Form";

function Page() {
	const blog = useSelector((state) => state.post.blog);
	const [data, set] = useState(blog);
	const [open, changeOpenState] = useState(true);
	const closeReq = () => {
		changeOpenState(false);
	};
	const openReq = () => {
		changeOpenState(true);
		console.log(open);
	};
	const dispatch = useDispatch();
	const iconSize = 20;
	const iconSizeHigh = 26;
	const iconStyle = { cursor: "pointer", padding: "2px" };
	const dividerStyle = {
		color: "#e4e4e7",
		padding: "0",
		margin: "0",
		cursor: "initial",
	};
	useEffect(() => {
		openReq;
	});
	const customCommands = [
		{
			...commands.hr,
			name: "Stars",
			icon: (
				<BsStars
					size={28}
					style={{ paddingLeft: "15px", margin: "0" }}
					className="last"
				/>
			),
			execute: () => console.log("Stars clicked!"),
		},
		{
			...commands.hr,
			name: "Divider1",
			icon: (
				<RxDividerVertical size={35} style={dividerStyle} className="last" />
			),
			execute: () => null,
		},
		{
			...commands.title,
			icon: <MdOutlineTextFields size={iconSize} style={iconStyle} />,
		},
		{
			...commands.bold,
			icon: <FaBold size={iconSize} style={iconStyle} />,
		},
		{
			...commands.italic,
			icon: <FaItalic size={iconSize} style={iconStyle} />,
		},
		{
			...commands.hr,
			name: "Divider2",
			icon: (
				<RxDividerVertical size={35} style={dividerStyle} className="last" />
			),
			execute: () => null,
		},
		{
			...commands.code,
			icon: <LuCode size={iconSize} style={iconStyle} />,
		},
		{
			...commands.codeBlock,
			icon: <LuCodeXml size={26} style={iconStyle} />,
		},
		{
			...commands.hr,
			name: "Divider3",
			icon: (
				<RxDividerVertical size={35} style={dividerStyle} className="last" />
			),
			execute: () => null,
		},

		{
			...commands.image,
			icon: <IoIosImages size={iconSize} style={iconStyle} />,
		},
		{
			...commands.link,
			icon: <FaLink size={iconSize} style={iconStyle} />,
		},
		{
			...commands.table,
			name: "Table",
			icon: <BsTable size={iconSize} style={iconStyle} />,
		},

		{
			...commands.hr,
			name: "Divider4",
			icon: <RxDividerVertical size={35} style={dividerStyle} />,
			execute: () => null,
		},
		{
			...commands.checkedListCommand,
			icon: <VscChecklist size={iconSizeHigh} style={iconStyle} />,
		},
		{
			...commands.unorderedListCommand,
			icon: <AiOutlineUnorderedList size={iconSizeHigh} style={iconStyle} />,
		},
	];

	const extraCommands = [
		{
			...commands.codeLive,
			icon: (
				<MdOutlineViewCarousel size={32} style={iconStyle} className="last" />
			),
		},
		{
			...commands.codeEdit,
			icon: <MdModeEditOutline size={24} style={iconStyle} />,
		},
		{
			...commands.codePreview,
			icon: <HiViewfinderCircle size={24} style={iconStyle} />,
		},
		{
			...commands.bold,
			icon: (
				<Button
					sx={{
						fontFamily: "Inter",
						fontSize: "1.1em",
						fontWeight: "600",
						height: "40px",
						width: "75px",
						color: "#ffffff",
						backgroundColor: "#2155CD",
						margin: " 0 15px 35px 15px",
						"&:hover": {
							backgroundColor: "#2155CD",
						},
					}}
				>
					SUBMIT
				</Button>
			),
			execute: () => {
				dispatch(setData(data));
			},
		},
	];
	return (
		<>
			<MDEditor
				height={800}
				toolbars={toolbar}
				value={data}
				onChange={(e) => set(e)}
				commands={customCommands}
				extraCommands={extraCommands}
			></MDEditor>
			<Form open={open} closeReq={closeReq} />
		</>
	);
}

export default Page;

import React, { useState } from "react";
import MDEditor, { commands, executeCommand } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css"; // Required styles
import "@uiw/react-markdown-preview/markdown.css"; // Required preview styles
import "./Page.css";
import { BsStars, BsTable } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
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
function Page() {
	const [value, setValue] = useState("*Welcome !*");

	const iconSize = 20; // Icon size
	const iconSizeHigh = 26;
	const iconStyle = { cursor: "pointer", padding: "2px" }; // Padding for each icon
	const dividerStyle = {
		color: "#e4e4e7",
		padding: "0",
		margin: "0",
		cursor: "initial",
	};
	// Custom commands with icons in specified order
	const customCommands = [
		{
			...commands.hr,
			name: "Stars",
			icon: <BsStars size={28} style={{ paddingLeft: "15px", margin: "0" }} />,
			execute: () => console.log("Stars clicked!"), // Example action
		},
		{
			...commands.hr,
			name: "Divider1",
			icon: <RxDividerVertical size={35} style={dividerStyle} />,
			execute: () => null, // No action for dividers
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
			icon: <RxDividerVertical size={35} style={dividerStyle} />,
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
			icon: <RxDividerVertical size={35} style={dividerStyle} />,
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
	];
	return (
		<MDEditor
			height={800}
			toolbars={toolbar}
			value={value}
			onChange={setValue}
			commands={customCommands}
			extraCommands={extraCommands}
		/>
	);
}

export default Page;

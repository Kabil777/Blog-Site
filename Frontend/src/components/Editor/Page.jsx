import { useEffect, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./Page.css";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import {
	MDXEditor,
	BoldItalicUnderlineToggles,
	InsertCodeBlock,
	useCodeBlockEditorContext,
	codeBlockPlugin,
	toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";

function Page() {
	const [open, changeOpenState] = useState(true);
	const closeReq = () => {
		changeOpenState(false);
	};
	const openReq = () => {
		changeOpenState(true);
		console.log(open);
	};
	useEffect(() => {
		openReq();
	}, []);

	const PlainTextCodeEditorDescriptor = {
		match: () => true, // Always use this editor for any code block
		priority: 0,
		Editor: (props) => {
			const cb = useCodeBlockEditorContext();
			return (
				<div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
					<textarea
						rows={3}
						cols={20}
						defaultValue={props.code}
						onChange={(e) => cb.setCode(e.target.value)}
					/>
				</div>
			);
		},
	};
	return (
		<>
			<MDXEditor
				style={{ marginTop: "20px" }}
				markdown="Your initial markdown content here..."
				plugins={[
					codeBlockPlugin({
						codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor],
					}),
					toolbarPlugin({
						toolbarClassName: "my-classname",
						toolbarContents: () => (
							<>
								{" "}
								<BoldItalicUnderlineToggles />
								<InsertCodeBlock />
							</>
						),
					}),
				]}
			/>
			<Form open={open} closeReq={closeReq} />
		</>
	);
}

export default Page;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbSourceCode } from "react-icons/tb";
import Form from "../Form/Form";
import {
    MDXEditor,
    BoldItalicUnderlineToggles,
    InsertCodeBlock,
    codeMirrorPlugin,
    ChangeCodeMirrorLanguage,
    CodeToggle,
    codeBlockPlugin,
    toolbarPlugin,
    listsPlugin,
    quotePlugin,
    ConditionalContents,
    ListsToggle,
    BlockTypeSelect,
    InsertImage,
    CreateLink,
    InsertThematicBreak,
    InsertTable,
    thematicBreakPlugin,
    tablePlugin,
    headingsPlugin,
    linkPlugin,
    linkDialogPlugin,
} from "@mdxeditor/editor";
import { setData, PostSend } from "../../store/reducers/editorReducer";

import { FaFileUpload } from "react-icons/fa";
import "./Page.css";
import "@mdxeditor/editor/style.css";
import { IconButton, Stack, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Page() {
    const dispatch = useDispatch();
    const markdownContent = useSelector((state) => state.post.blog);
    const postData = useSelector((state) => state.post);
    const [isSourceMode, setIsSourceMode] = useState(false);
    const [open, changeOpenState] = useState(true);
	const navigate = useNavigate()
    const closeReq = () => {
        changeOpenState(false);
    };
    const openReq = () => {
        changeOpenState(true);
    };

    useEffect(() => {
        openReq();
    }, []);

    const SetBlog = (content) => {
        content = content
            .replace(/\\/g, "")
            .replace(/&#x9;/g, "\t")
            .replace(/&#x20;/g, " ");
        dispatch(setData(content));
        console.log(content);
    };

    const submitPost = async () => {
        try {
            await dispatch(PostSend(postData));
            setSnackbarMessage("Post submitted successfully!");
            setSnackbarType("success");
			setTimeout(()=>{
			navigate("/");
			},3000)
        } catch (error) {
            setSnackbarMessage("Failed to submit post.");
            setSnackbarType("error");
			setTimeout(()=>{
				navigate("/");
				},3000)
        } finally {
            setSnackbarOpen(true);setTimeout(()=>{
				navigate("/");
				},3000)
        }
    };

    const status = useSelector((state) => state.post.status);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarType, setSnackbarType] = useState("");

    useEffect(() => {
        if (status === "success") {
            setSnackbarMessage("Post submitted successfully!");
            setSnackbarType("success");
            setOpenSnackbar(true);
			
        } else if (status === "failure") {
            setSnackbarMessage("Failed to submit the post.");
            setSnackbarType("failure");
            setOpenSnackbar(true);
        } else if (status === "pending") {
            setSnackbarMessage("Submitting your post...");
            setSnackbarType("info");
            setOpenSnackbar(true);
        }
    }, [status]);

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const languageMapping = {
        js: "JavaScript",
        ts: "TypeScript",
        css: "CSS",
        html: "HTML",
        json: "JSON",
        md: "Markdown",
        python: "Python",
        java: "Java",
        cpp: "C++",
        c: "C",
        go: "Go",
        rust: "Rust",
    };

    const getSupportedLanguages = () => {
        return Object.entries(languageMapping).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    };

    const ToolbarDivider = () => (
        <div
            style={{
                width: "1px",
                height: "20px",
                backgroundColor: "#ccc",
                margin: "0 8px",
            }}
        />
    );

    return (
        <>
            <MDXEditor
                style={{ marginTop: "20px", padding: "0", position: "fixed" }}
                markdown={markdownContent}
                readOnly={false}
                onChange={SetBlog}
                plugins={[
                    codeBlockPlugin({
                        defaultCodeBlockLanguage: "js",
                    }),
                    listsPlugin(),
                    quotePlugin(),
                    headingsPlugin(),
                    thematicBreakPlugin(),
                    tablePlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    codeMirrorPlugin({ codeBlockLanguages: getSupportedLanguages() }),
                    toolbarPlugin({
                        toolbarClassName: "my-classname",
                        toolbarContents: () => (
                            <>
                                {" "}
                                <ConditionalContents
                                    options={[
                                        {
                                            when: (editor) => editor?.editorType === "codeblock",
                                            contents: () => <ChangeCodeMirrorLanguage />,
                                        },
                                        {
                                            fallback: () => {
                                                <InsertCodeBlock />;
                                            },
                                        },
                                    ]}
                                />
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                    width="50%"
                                >
                                    <BoldItalicUnderlineToggles />
                                    <ToolbarDivider />
                                    <CodeToggle />
                                    <InsertCodeBlock />
                                    <ToolbarDivider />
                                    <ListsToggle />
                                    <ToolbarDivider />
                                    <BlockTypeSelect />
                                    <ToolbarDivider />
                                    <InsertImage />
                                    <CreateLink />
                                    <ToolbarDivider />
                                    <InsertTable />
                                    <InsertThematicBreak />
                                    <IconButton
                                        onClick={() => {
                                            console.log(isSourceMode);
                                            setIsSourceMode(!isSourceMode);
                                        }}
                                    >
                                        <TbSourceCode />
                                    </IconButton>
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    width="50%"
                                >
                                    <IconButton color="#2155cd" onClick={submitPost}>
                                        <FaFileUpload size={20} color="#2155cd" />
                                    </IconButton>
                                </Stack>
                            </>
                        ),
                    }),
                ]}
            />
            <Form open={open} closeReq={closeReq} />
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarType} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Page;
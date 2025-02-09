import { Snackbar } from "@mui/material";

export default function MultipleSnackbars({
  openSnackbar,
  snackbarMessage,
  snackbarType, // Accepts "success", "warning", or "failure"
  handleCloseSnackbar,
}) {
  // Define colors based on the type
  const snackbarStyles = {
    success: { background: "#DFF2BF", text: "#4F8A10" }, // Light Green BG, Dark Green Text
    warning: { background: "#FEEFB3", text: "#9F6000" }, // Light Yellow BG, Dark Yellow Text
    failure: { background: "#FFBABA", text: "#D8000C" }, // Light Red BG, Dark Red Text
  };

  // Fallback to warning if type is invalid
  const { background, text } = snackbarStyles[snackbarType] || snackbarStyles.warning;

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={(event, reason) => {
        if (reason !== "clickaway") {
          handleCloseSnackbar();
        }
      }}
      message={snackbarMessage}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      ContentProps={{
        sx: {
          backgroundColor: background,
          color: text,
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    />
  );
}

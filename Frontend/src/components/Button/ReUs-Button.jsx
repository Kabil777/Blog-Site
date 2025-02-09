import React from "react";
import {Button} from "@mui/material"
import PropTypes from "prop-types";

const ReUseButton = ({ text, bgColor, color }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: bgColor, color: color, padding: "0.5rem 1rem", borderRadius: "2px", fontWeight: "600"}}
    >
      {text}
    </Button>
  );
};

ReUseButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};


export default ReUseButton;

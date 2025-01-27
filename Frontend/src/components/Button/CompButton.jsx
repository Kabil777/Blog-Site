import React from "react";
import { Button } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
export default function CompButton() {
  const buttons = [
    { label:"PYHTON" , icon:<FaPython /> },
    { label:"DATA STRUCTURES" , icon:<AiOutlineKubernetes/> },
    { label:"FOLLOW" , icon:<IoMdAdd />,
  ];
  return (
    {buttons.map((button, index)=>(
      <Button
      key={index},
      variant="contained",
      startIcon={button.icon},
      >button.label</Button>
    ))}
  );
}

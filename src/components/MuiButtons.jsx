import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const buttonBase = {
  width: "198px",
  height: "48px",
  borderRadius: "12px",
};

const OutlinedBlueButton = styled(Button)(({ theme }) => ({
  ...buttonBase,
  background: "none",
  border: "2px solid #1f6ed4",
  color: "#1f6ed4",

  "&:hover": {
    background: "none",
    border: "3px solid #1f6ed4",
  },

  "&:active": {
    background: "#0052bc",
    color: "#e0e0e0",
  },

  // "&:disabled": {
  //   background: "#fff",
  //   borderColor: "#e0e0e0",
  //   boxShadow: "none",
  // },
}));

const SolidBlueButton = styled(Button)(({ theme }) => ({
  ...buttonBase,
  background: "#1F6ED4",
  color: "white",
  border: "none",

  "&:hover": {
    background: "#4c94f0",
    color: "white",
  },

  "&:active": {
    background: "#003c99",
  },

  // "&:disabled": {
  //   background: "#c0c0c0",
  //   boxShadow: "none",
  // },
}));

const SolidOrangeButton = styled(Button)(({ theme }) => ({
  ...buttonBase,
  background: "#F37705",
  color: "white",
  border: "none",

  "&:hover": {
    background: "#ff912b",
    color: "white",
  },

  "&:active": {
    background: "#cf6300",
  },

  // "&:disabled": {
  //   background: "#c0c0c0",
  //   boxShadow: "none",
  // },
}));

const SolidRedButton = styled(Button)(({ theme }) => ({
  ...buttonBase,
  background: "#DF2D2D",
  color: "white",
  border: "none",

  "&:hover": {
    background: "#E54343",
  },

  "&:active": {
    background: "#C20B0B",
  },

  // "&:disabled": {
  //   background: "#c0c0c0",
  //   boxShadow: "none",
  // },
}));

export const MuiButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
      }}
    >
      <OutlinedBlueButton variant="outlined">Outlined</OutlinedBlueButton>
      <SolidBlueButton variant="contained">Contained</SolidBlueButton>
      <SolidOrangeButton variant="contained">WARNING</SolidOrangeButton>
      <SolidRedButton variant="contained">DANGER</SolidRedButton>
    </div>
  );
};

export default MuiButtons;

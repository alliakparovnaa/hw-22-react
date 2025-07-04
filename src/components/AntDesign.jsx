import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const buttonBase = `
  width: 198px;
  height: 48px;
  border-radius: 12px;
  transition: all 0.3s ease;
`;

const OutlinedBlueButton = styled(Button)`
  &&.ant-btn {
    ${buttonBase}
    background:none;
    border: 2px solid #1f6ed4;
    color: #1f6ed4;

    &:hover {
      background: none;
      border: 3px solid #1f6ed4;
    }

    &:active {
      background: #0052bc;
      border-color: none;
      color: #e0e0e0;
    }

    /* &:disabled,
    &[disabled] {
      background: #fff;
      border-color: #e0e0e0;
      box-shadow: none;
    } */
  }
`;

const SolidBlueButton = styled(Button)`
  &&.ant-btn {
    ${buttonBase}
    background: #1F6ED4;
    color: white;
    border: none;

    &:hover {
      background: #4c94f0;
      color: white;
    }

    &:active {
      background: #003c99;
    }

    /* &:disabled,
    &[disabled] {
      background: #c0c0c0;
      box-shadow: none;
    } */
  }
`;

const SolidOrangeButton = styled(Button)`
  &&.ant-btn {
    ${buttonBase}
    background: #F37705;
    color: white;
    border: none;

    &:hover {
      background: #ff912b;
      color: white;
      border: none;
    }

    &:active {
      background: #cf6300;
      color: white;
      border: none;
    }

    /* &:disabled,
    &[disabled] {
      background: #c0c0c0;
      box-shadow: none;
    } */
  }
`;

const SolidRedButton = styled(Button)`
  &&.ant-btn {
    ${buttonBase}
    background: #DF2D2D;
    border: none;
    color: white;

    &:hover {
      background: #e54343;
      border: none;
      color: white;
    }

    &:active {
      background: #c20b0b;
      border: none;
      color: white;
    }

    /* &:disabled,
    &[disabled] {
      background: #c0c0c0;
      box-shadow: none;
    } */
  }
`;

export const AntDesign = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
      }}
    >
      <OutlinedBlueButton>Outlined </OutlinedBlueButton>
      <SolidBlueButton>Contained</SolidBlueButton>
      <SolidOrangeButton>WARNING</SolidOrangeButton>
      <SolidRedButton>DANGER</SolidRedButton>
    </div>
  );
};

export default AntDesign;

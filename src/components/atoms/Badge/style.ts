import styled from "styled-components";

import { IProps } from "./type";

export const Wrapper = styled.span`
  top: 0;
  right: 0;
  z-index: 1;
  position: absolute;
  flex-wrap: wrap;
  font-size: 0.75rem;
  transform: scale(1) translate(50%, -50%);
  box-sizing: border-box;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  align-content: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  transform-origin: 100% 0%;
  display: flex;
  color: #fff;

  background-color: ${(props: IProps): string => {
    switch (props.color) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#f50057";
      default:
        return "#f44336";
    }
  }};

  height: ${(props: IProps): string => {
    switch (props.variant) {
      case "dot":
        return "6px";
      default:
        return "20px";
    }
  }};

  padding: ${(props: IProps): string => {
    switch (props.variant) {
      case "dot":
        return "0";
      default:
        return "0 4px";
    }
  }};

  min-width: ${(props: IProps): string => {
    switch (props.variant) {
      case "dot":
        return "6px";
      default:
        return "20px";
    }
  }};

  transform: ${(props: IProps): string => {
    switch (props.isShow) {
      case true:
        return "scale(1) translate(50%, -50%);";
      default:
        return "scale(0) translate(50%, -50%);";
    }
  }};
`;

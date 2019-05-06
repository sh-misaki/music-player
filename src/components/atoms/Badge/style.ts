import styled from "styled-components";

import { IProps } from "./type";

export const Wrapper = styled.span`
  flex-wrap: wrap;
  font-size: 10px;
  box-sizing: border-box;
  align-items: center;
  font-weight: 500;
  align-content: center;
  border-radius: 10px;
  justify-content: center;
  color: #fff;
  transform: translate(50%, -50%);

  background-color: ${(props: IProps): string => {
    switch (props.color) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#f50057";
      case "error":
        return "#f44336";
      default:
        return "#f44336";
    }
  }};

  ${(props: IProps): string => {
    if (props.dot) {
      return "height: 6px; padding: 0; min-width: 6px;";
    } else {
      return "height: 20px; padding: 0 4px; min-width: 20px";
    }
  }};

  display: ${(props: IProps): string => {
    if (props.isShow) {
      return "inline-flex;";
    } else {
      return "none;";
    }
  }}};
`;
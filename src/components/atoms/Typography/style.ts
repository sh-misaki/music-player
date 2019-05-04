import styled from "styled-components";
import { IProps } from "./type";

export const Wrapper = styled.div`
  font-size: ${(props: IProps): string => {
    switch (props.type) {
      case "title":
        return "64px";
      case "subTitle":
        return "24px";
      case "note":
        return "8px";
      default:
        return "12px";
    }
  }};
  font-weight: ${(props: IProps): string => {
    switch (props.type) {
      case "note":
        return "100";
      default:
        return "bold";
    }
  }};
  color: ${(props: IProps): string => {
    switch (props.type) {
      case "note":
        return "#8f868a";
      default:
        return props.color as string;
    }
  }};
  line-height: ${(props: IProps): string|number => props.type === "subTitle" ? 1 : "normal"};
`;

import styled from "styled-components";

interface IWrapperProps {
  type?: string;
  color?: string;
}

export const Wrapper = styled.div`
  font-size: ${(props: IWrapperProps): string => {
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
  font-weight: ${(props: IWrapperProps): string => {
    switch (props.type) {
      case "note":
        return "100";
      default:
        return "bold";
    }
  }};
  color: ${(props: IWrapperProps): string => {
    if (!!props.color) {
      return props.color;
    }
    switch (props.type) {
      case "note":
        return "#8f868a";
      default:
        return "#4b536d";
    }
  }};
  line-height: ${(props: IWrapperProps): string|number => props.type === "subTitle" ? 1 : "normal"};
`;

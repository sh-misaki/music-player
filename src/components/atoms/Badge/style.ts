import styled from "styled-components";

interface IWrapperProps {
  status?: string;
  type?: string;
}

export const Wrapper = styled.div`
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  position: relative;
  color: #fff;

  background-color: ${(props: IWrapperProps): string => {
    switch (props.status) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#6c757d";
      case "success":
        return "#28a745";
      case "danger":
        return "#dc3545";
      case "warning":
        return "#ffc107";
      case "info":
        return "#17a2b8";
      default:
        return "#007bff";
    }
  }};
  border-radius: ${(props: IWrapperProps): string => {
    switch (props.type) {
      case "pill":
        return "10rem";
      default:
        return "0.25rem";
    }
  }};
`;

export const Count = styled.span`
  background-color: #007bff;
  top: 0;
  right: 0;
  height: 20px;
  display: flex;
  padding: 0 4px;
  z-index: 1;
  position: absolute;
  flex-wrap: wrap;
  font-size: 0.75rem;
  min-width: 20px;
  transform: scale(1) translate(50%, -50%);
  box-sizing: border-box;
  font-weight: 500;
  align-content: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  font-size: 10px;
`;

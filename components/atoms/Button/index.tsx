import * as React from "react";
import styled from "styled-components";

interface IProps {
  label: string;
  primary: boolean;
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: IProps) => props.primary ? "palevioletred" : "white"};
  color: ${(props: IProps) => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;

export default (props: IProps) => (
  <Button>{props.label}</Button>
);

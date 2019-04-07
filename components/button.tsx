import * as React from "react";

interface IProps {
  label: string;
  onClick: () => void;
}

const Button = (props: IProps) => (
  <button onClick={props.onClick}>{props.label}</button>
);

export default Button;

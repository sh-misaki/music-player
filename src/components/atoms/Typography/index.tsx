import React from "react";

import {
  Wrapper,
} from "./style";

interface IProps {
  type?: string;
  color?: string;
}

export default class List extends React.Component<IProps> {
  public render() {
    return (
      <Wrapper
        type={this.props.type}
        color={this.props.color}
      >
        { this.props.children }
      </Wrapper>
    );
  }
}

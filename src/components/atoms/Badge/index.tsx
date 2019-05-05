import React from "react";

import { IProps } from "./type";

import { Wrapper, Count } from "./style";

export default class Badge extends React.Component<IProps> {
  public static defaultProps: IProps = {
    status: "primary"
  };

  public render() {
    return (
      <Wrapper status={this.props.status} type={this.props.type}>
        {this.props.children}
        {this.props.count && <Count>{this.props.count}</Count>}
      </Wrapper>
    );
  }
}

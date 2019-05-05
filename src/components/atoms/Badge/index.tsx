import React from "react";

import {
  Wrapper,
  Count
} from "./style";

interface IProps {
  status?: string;
  type?: string;
  count?: string;
}

export default class Badge extends React.Component<IProps> {
  public render() {
    return (
      <Wrapper
        status={this.props.status}
        type={this.props.type}
      >
        {this.props.children}
        {
          this.props.count && <Count>{this.props.count}</Count> 
        }
      </Wrapper>
    );
  }
}

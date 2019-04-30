import React from "react";
import { connect } from "react-redux";

import {
  Wrapper,
} from "./style";

interface IProps {
  type?: string;
}

class List extends React.Component<IProps> {
  public render() {
    return (
      <Wrapper
        type={this.props.type}
      >
        { this.props.children }
      </Wrapper>
    );
  }
}

export default connect((state) => state)(List);

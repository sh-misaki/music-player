import React, { Component, Children } from "react";
import { ButtonWrapper } from "./style";

class Button extends Component {
  public render() {
    const { children } = this.props;
    return (
      <ButtonWrapper
        type="button"
      >
        { children }
      </ButtonWrapper>
    );
  }
}

export default Button;

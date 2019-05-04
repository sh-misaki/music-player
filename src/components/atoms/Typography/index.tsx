import React from "react";

import { IProps, } from "./type";

import { Wrapper, } from "./style";

export default class Typography extends React.Component<IProps> {
  public static defaultProps: IProps = {
    color: "#4b536d",
    type: "normal"
  };

  public render() {
    return (
      <Wrapper {...this.props}/>
    );
  }
}

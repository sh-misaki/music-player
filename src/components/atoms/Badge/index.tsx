import React from "react";

import { IProps } from "./type";

import { Wrapper } from "./style";


export default class Badge extends React.Component<IProps> {
  public static defaultProps: IProps = {
    color: "primary",
    badgeContent: 0,
    max: 99,
    invisible: true,
    showZero: false
  };

  public render() {
    const { badgeContent, max} = this.props;
    const text = max <= badgeContent ? `${max}+` : badgeContent;
    const isShowZero = text == 0 && this.props.showZero;
    return (
      <Wrapper {...this.props} isShow={isShowZero && this.props.invisible || this.props.invisible}>
        {text}
      </Wrapper>
    );
  }
}

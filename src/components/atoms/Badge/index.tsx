import React from "react";

import { IProps } from "./type";

import { Wrapper } from "./style";

function checkShow(isShowZero: boolean, text: string, isVisible: boolean) {
  if (!isShowZero && text == "0") {
    return false;
  } else if (!isVisible) {
    return false;
  } else {
    return true;
  }
}

export default class Badge extends React.Component<IProps> {
  public static defaultProps: IProps = {
    color: "primary",
    badgeContent: "0",
    max: "99",
    visible: true,
    isShow: true,
    showZero: false
  };

  public render() {
    const { badgeContent, max } = this.props;
    const text = Number(max) <= Number(badgeContent) ? `${max}+` : badgeContent;
    const isShowZero = text == "0" && this.props.showZero;
    const isShow = checkShow(isShowZero, text, this.props.visible);
    return (
      <Wrapper {...this.props} isShow={isShow}>
        {text}
      </Wrapper>
    );
  }
}

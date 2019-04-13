import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";

import Button from "~/components/atoms/Button";

class Login extends Component {
  public render() {
    return (
      <Wrapper>
        <Button>
          ログイン
        </Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ }) => ({ });
export default connect(mapStateToProps)(Login);

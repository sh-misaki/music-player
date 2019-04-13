import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../atoms/Button";

class Login extends Component {
  public render() {
    return (
      <div>
        <Button>
          ログイン
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ }) => ({ });
export default connect(mapStateToProps)(Login);

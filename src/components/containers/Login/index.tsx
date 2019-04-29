import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";

const SCOPE = [
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "user-follow-read",
].join("%20");
const RESPONSE_TYPE = "token";
const STATE = "123";

interface ISpotifySetting {
  [key: string]: string;
  client_id: string;
  redirect_uri: string;
  scope: string;
  response_type: string;
  state: string;
}

class Login extends Component {
  public render() {
    const soptifySettings: ISpotifySetting = {
      client_id: process.env.CLIENT_ID as string,
      redirect_uri: process.env.REDIRECT_URI as string,
      scope: SCOPE,
      response_type: RESPONSE_TYPE,
      state: STATE,
    };
    const soptifyLoginUri = `${process.env.LOGIN_URI}?${
      Object.keys(soptifySettings).map((key: string): string => {
        return `${key}=${soptifySettings[key]}`;
      }).join("&")
    }`;
    return (
      <Wrapper>
        <a href={soptifyLoginUri}>
          ログイン
        </a>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(Login);

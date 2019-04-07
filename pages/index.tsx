import * as React from "react";
import Button from "../components/button";
import axios from "axios";
import cookies from "next-cookies";

interface IProps {
  test: string;
}

interface IState {
  hash: string;
}

export default class TopContainer extends React.Component<IProps, IState> {
  public state: IState = {
    hash: "",
  };

  private async componentDidMount() {
    const hashString = window.location.hash.split("&")[0].split("=")[1];
    this.setState({
      hash: hashString,
    });

    const res = await axios({
      headers: {
        Authorization: `Bearer ${hashString}`,
      },
      method: "get",
      url: "https://api.spotify.com/v1/me",
    });
  }

  private render() {
    const loginUri = "https://accounts.spotify.com/authorize";
    const clientId = "a1bd0a2ad2ce41edb109fdcc95206aea";
    const redirectUri = "http:%2F%2Flocalhost:3000%2F";
    const scope = "user-read-private%20user-read-email";

    return (
      <div>
        <a href={
          `${loginUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&state=123`
        }>
          <Button label="ログイン"/>
        </a>
      </div>
    );
  }
}

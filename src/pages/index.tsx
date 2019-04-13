import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Top from "~/components/containers";

interface ITopPage {
  token: string;
  recentlyPlayed: object[];
}

interface ITopState {
  recentlyPlayed: any;
}

export default class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    recentlyPlayed: []
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const res = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: "https://api.spotify.com/v1/me/player/recently-played",
    });

    this.setState({
      recentlyPlayed: res.data,
    });
  }

  public render() {

    return (
      <Top
        recentlyPlayed={this.state.recentlyPlayed}
      />
    );
  }
}

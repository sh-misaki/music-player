import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Top from "~/components/containers";
import Main from "~/components/templates/Main";

interface ITopPage {
  token: string;
  artist: object;
}

interface ITopState {
  artist: {};
}

export default class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    artist: {}
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const res = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
    });

    this.setState({
      artist: res.data,
    });
  }

  public render() {

    return (
      <Main>
        <Top
          artist={this.state.artist}
        />
      </Main>
    );
  }
}

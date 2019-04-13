import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Home from "~/components/containers/Home";
import Main from "~/components/templates/Main";

interface ITopPage {
  token: string;
}

interface ITopState {
  artists: object[];
}

export default class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    artists: [],
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const resMyArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/me/top/artists`,
    });

    console.log(resMyArtists.data)

    const requestArtists = [
      "0bAsR2unSRpn6BQPEnNlZm",
      "7n2Ycct7Beij7Dj7meI4X0",
    ].concat(resMyArtists.data.items.map((item) => {
      return item.id;
    }));

    const resArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/artists?ids=${requestArtists.join(",")}`,
    });

    this.setState({
      artists: resArtists.data.artists,
    });
  }

  public render() {

    return (
      <Main>
        <Home
          artists={this.state.artists}
        />
      </Main>
    );
  }
}

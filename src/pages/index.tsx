import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Home from "~/components/containers/Home";
import Main from "~/components/templates/Main";

import { connect } from "react-redux";

import { ITodoState } from "~/stores/modules/artists/reducers";

interface ITopPage {
  token: string;
  store: ITodoState;
}

interface ITopState {
  artists: SpotifyApi.ArtistObjectFull[];
}

class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    artists: [],
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {
      window.location.href = "/login";
      return;
    }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const resArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/me/top/artists`,
    });

    this.setState({
      artists: resArtists.data.items,
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

function mapStateToProps(store: ITodoState) {
  return {store};
}

export default connect(mapStateToProps)(TopPage);

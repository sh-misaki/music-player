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
  albums: {};
  topTracks: {};
}

export default class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    artist: {},
    albums: {},
    topTracks: {}
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const resArtist = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
    });

    const resAlbum = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/artists/${resArtist.data.id}/albums`,
    });

    const resTopTracks = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/artists/${resArtist.data.id}/top-tracks?country=jp`,
    });

    this.setState({
      artist: resArtist.data,
      albums: resAlbum.data,
      topTracks: resTopTracks.data.tracks,
    });
  }

  public render() {

    return (
      <Main>
        <Top
          artist={this.state.artist}
          albums={this.state.albums}
          topTracks={this.state.topTracks}
        />
      </Main>
    );
  }
}

import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Top from "~/components/containers";
import Main from "~/components/templates/Main";

interface ITopPage {
  artist: object;
  albums: object;
  topTracks: object;
}

export default class TopPage extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    const { token } = cookies(ctx);
    const { id } = ctx.query;

    if (!token) {return {}; }

    const res = await axios.all([
      `${id}`,
      `${id}/albums`,
      `${id}/top-tracks?country=jp`,
    ].map((path: string) => {
      return axios.create({
        headers: { Authorization: `Bearer ${token}`, },
      }).get(`https://api.spotify.com/v1/artists/${path}`);
    }));

    return {
      artist: res[0].data,
      albums: res[1].data,
      topTracks: res[2].data.tracks,
    };
  }

  public render() {

    return (
      <Main>
        <Top
          artist={this.props.artist}
          albums={this.props.albums}
          topTracks={this.props.topTracks}
        />
      </Main>
    );
  }
}

import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

interface ITopPage {
  album: SpotifyApi.AlbumObjectFull;
}

export default class TopPage extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    const { token } = cookies(ctx);
    const { id } = ctx.query;

    if (!token) {return {}; }

    const res = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/albums/${id}`,
    });

    return {
      album: res.data,
    };
  }

  public render() {
    const { album } = this.props;
    return (
      <Main>
        <List
          title={album.name}
          coverImg={album.images[0].url}
          tracks={album.tracks.items}
          recommendations={[]}
        />
      </Main>
    );
  }
}

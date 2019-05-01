import * as React from "react";
import cookies from "next-cookies";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

import { playlistOperations } from "~/stores/modules/playlist";

interface ITopPage {
  playlist: SpotifyApi.PlaylistObjectFull;
}

export default class ArtistsShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    await ctx.store.dispatch(playlistOperations.fetchListAsync(
      cookies(ctx).token as string,
      ctx.query.id
    ));
    const { playlistReducers: playlistState } = ctx.store.getState();

    return {
      playlist: playlistState.playlist,
    };
  }

  public render() {
    return (
      <Main>
        <List
          title={this.props.playlist.name}
          coverImg={this.props.playlist.images ? this.props.playlist.images[0].url : ""}
          tracks={this.props.playlist.tracks.items.map((item: SpotifyApi.PlaylistTrackObject) => item.track)}
          recommendations={[]}
        />
      </Main>
    );
  }
}

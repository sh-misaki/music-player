import * as React from "react";
import cookies from "next-cookies";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

import { artistShowOperations } from "~/stores/modules/artistsShow";

interface ITopPage {
  artist: SpotifyApi.ArtistObjectFull | any;
  albums: SpotifyApi.AlbumObjectFull[];
  topTracks: SpotifyApi.TrackObjectFull[];
}

export default class ArtistsShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    await ctx.store.dispatch(artistShowOperations.fetchListAsync(
      cookies(ctx).token as string,
      ctx.query.id
    ));
    const { artistShowReducers: artistShowState } = ctx.store.getState();

    return {
      artist: artistShowState.artist,
      albums: artistShowState.albums.items,
      topTracks: artistShowState.topTracks
    };
  }

  public render() {
    return (
      <Main>
        <List
          title={this.props.artist.name}
          coverImg={this.props.artist.images ? this.props.artist.images[0].url : ""}
          tracks={this.props.topTracks}
          recommendations={this.props.albums}
        />
      </Main>
    );
  }
}

import * as React from "react";
import cookies from "next-cookies";

import Detail from "~/components/containers/Detail";
import Main from "~/components/templates/Main";

import { albumsOperations } from "~/stores/modules/album";

interface ITopPage {
  album: SpotifyApi.AlbumObjectFull;
  artist: SpotifyApi.ArtistObjectFull;
}

export default class AlbumShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    await ctx.store.dispatch(albumsOperations.fetchListAsync(
      cookies(ctx).token as string,
      ctx.query.id
    ));
    const { albumReducers: albumState } = ctx.store.getState();

    return {
      album: albumState.album,
      artist: albumState.artist,
    };
  }

  public render() {
    const { album, artist } = this.props;

    return (
      <Main>
        <Detail
          title={album.name}
          description={artist.name}
          mainImg={album.images[0].url}
          coverImg={artist.images[0].url}
          tracks={album.tracks.items}
          recommendations={[]}
        />
      </Main>
    );
  }
}

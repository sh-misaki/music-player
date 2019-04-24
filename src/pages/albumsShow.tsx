import * as React from "react";
import cookies from "next-cookies";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

import { albumsOperations } from "~/stores/modules/albums";

interface ITopPage {
  album: SpotifyApi.AlbumObjectFull;
}

export default class AlbumShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    await ctx.store.dispatch(albumsOperations.fetchListAsync(
      cookies(ctx).token as string,
      ctx.query.id
    ));
    const { albumReducers: albumState } = ctx.store.getState();

    return {
      album: albumState.album
    };
  }

  public render() {
    const { album } = this.props;
    return (
      <Main>
        {
          Object.keys(album).length ? (
            <List
              title={album.name}
              coverImg={album.images[0].url}
              tracks={album.tracks.items}
              recommendations={[]}
            />
          ) : <div/>
        }
      </Main>
    );
  }
}

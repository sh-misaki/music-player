import * as React from "react";
import cookies from "next-cookies";
import { connect } from "react-redux";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

import { albumsOperations } from "~/stores/modules/albums";
import { IStore } from "~/stores/";

interface ITopPage {
  album: SpotifyApi.AlbumObjectFull;
  token: string;
  id: string;
  fetchListAsync: (
    token: string,
    id: string,
  ) => {};
}

class AlbumShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    const { token } = cookies(ctx);
    const { id } = ctx.query;

    if (!token) {return {}; }

    return {
      album: {},
      token,
      id,
    };
  }

  public async componentDidMount() {
    this.props.fetchListAsync(this.props.token, this.props.id);
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

const mapStateToProps = (store: IStore) => {
  return {
    album: store.albumReducers.album
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchListAsync: (token: string, id: string) => dispatch(albumsOperations.fetchListAsync(token, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

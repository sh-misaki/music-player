import * as React from "react";
import cookies from "next-cookies";
import { connect } from "react-redux";

import List from "~/components/containers/List";
import Main from "~/components/templates/Main";

import { artistShowOperations } from "~/stores/modules/artistsShow";
import { IStore } from "~/stores/";

interface ITopPage {
  token: string;
  id: string;
  artist: SpotifyApi.ArtistObjectFull | any;
  albums: SpotifyApi.AlbumObjectFull[];
  topTracks: SpotifyApi.TrackObjectFull[];
  fetchListAsync: (
    token: string,
    id: string,
  ) => {};
}

class ArtistsShow extends React.Component<ITopPage> {
  protected static async getInitialProps({ ctx }: any) {
    const { token } = cookies(ctx);
    const { id } = ctx.query;

    if (!token) {return {}; }

    return {
      token,
      id,
    };
  }

  public async componentDidMount() {
    this.props.fetchListAsync(this.props.token, this.props.id);
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

const mapStateToProps = (store: IStore) => {
  return {
    artist: store.artistShowReducers.artist,
    albums: store.artistShowReducers.albums,
    topTracks: store.artistShowReducers.topTracks
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchListAsync: (token: string, id: string) => dispatch(artistShowOperations.fetchListAsync(token, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsShow);

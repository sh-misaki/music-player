import * as React from "react";
import cookies from "next-cookies";
import { connect } from "react-redux";

import Home from "~/components/containers/Home";
import Main from "~/components/templates/Main";

import { artistsOperations } from "~/stores/modules/artists";
import { IStore } from "~/stores/";

interface ITopPage {
  token: string;
  artists: SpotifyApi.ArtistObjectFull[];
  fetchListAsync: (token: string) => {};
}

class TopPage extends React.Component<ITopPage> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    if (!token) {
      window.location.href = "/login";
      return;
    } else {
      this.props.fetchListAsync(token);
    }
  }

  public render() {
    return (
      <Main>
        <Home
          artists={this.props.artists}
        />
      </Main>
    );
  }
}

const mapStateToProps = (store: IStore) => {
  return {
    artists: store.artistsReducers.artists
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchListAsync: (token: string) => dispatch(artistsOperations.fetchListAsync(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);

import * as React from "react";
import cookies from "next-cookies";
import { connect } from "react-redux";

import Home from "~/components/containers/Home";
import Main from "~/components/templates/Main";

import { recommendOperations } from "~/stores/modules/recommendations";
import { IRecommendsState } from "~/stores/modules/recommendations/types";

interface ITopPage extends IRecommendsState {
  token: string;
  fetchListAsync: (token: string) => {};
}

class TopPage extends React.Component<ITopPage> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);

    let topStore = {
      artists: [],
      newReleases: [],
      featuredPlaylists: [],
      recommendTracks: [],
    };
    if (token) {
      await ctx.store.dispatch(recommendOperations.fetchListAsync(
        token as string
      ));
      topStore = ctx.store.getState().recommendReducers;
    }
    const {
      artists,
      newReleases,
      featuredPlaylists,
      recommendTracks,
    } = topStore;

    return {
      token,
      artists,
      newReleases,
      featuredPlaylists,
      recommendTracks,
    };
  }

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token && token) {document.cookie = `token=${token}`; }

    if (!token) {
      window.location.href = "/login";
    } else {
      this.props.fetchListAsync(token);
    }
  }

  public render() {
    return (
      <Main>
        <Home
          artists={this.props.artists}
          newReleases={this.props.newReleases}
          featuredPlaylists={this.props.featuredPlaylists}
          recommendTracks={this.props.recommendTracks}
        />
      </Main>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    artists: store.recommendReducers.artists,
    newReleases: store.recommendReducers.newReleases,
    featuredPlaylists: store.recommendReducers.featuredPlaylists,
    recommendTracks: store.recommendReducers.recommendTracks,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchListAsync: (token: string) => dispatch(recommendOperations.fetchListAsync(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);

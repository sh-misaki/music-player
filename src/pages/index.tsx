import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import { loadData, tickClock } from "~/stores/actions";
import Top from "~/components/containers";

interface ITopPage {
  token: string;
}

export default class TopPage extends React.Component<ITopPage> {
  protected static async getInitialProps({ctx}: any) {
    const { store, isServer } = ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    const { token } = cookies(ctx);

    return {
      isServer,
      token,
    };
  }

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: "https://api.spotify.com/v1/me",
    });
  }

  public render() {
    return (
      <Top
        title="Index Page"
        linkTo="/other"
        NavigateTo="Other Page"
        lastUpdate={0}
        token={this.props.token}
      />
    );
  }
}

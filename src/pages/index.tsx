import * as React from "react";
import axios from "axios";
import cookies from "next-cookies";

import Home from "~/components/containers/Home";
import Main from "~/components/templates/Main";

import { connect } from "react-redux";

import { ITodoState } from "~/stores/modules/artists/reducers";

interface ITopPage {
  token: string;
  store: ITodoState;
}

interface ITopState {
  artists: SpotifyApi.ArtistObjectFull[];
}

class TopPage extends React.Component<ITopPage, ITopState> {
  protected static async getInitialProps({ctx}: any) {
    const { token } = cookies(ctx);
    return { token, };
  }

  public state: ITopState = {
    artists: [],
  };

  public async componentDidMount() {
    const token = this.props.token || window.location.hash.split("&")[0].split("=")[1];

    if (!token) {return; }

    // cookieにtokenが存在しない場合、設定
    if (!this.props.token) {document.cookie = `token=${token}`; }

    const resMyArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/me/top/artists`,
    });

    const requestArtists = [
      "0bAsR2unSRpn6BQPEnNlZm",
      "7n2Ycct7Beij7Dj7meI4X0",
      "03E7w8NrBr4lNCK33TQyil",
      "08lN7bm4Etec8ETFxaTUmq",
      "0eQSoTI7sQENREQM8Klp2j",
      "5kVZa4lFUmAQlBogl1fkd6",
      "66CXWjxzNUsdJxJ2JdwvnR",
      "6O9ZTocnZDT41j4YrOalhz",
      "1qma7XhwZotCAucL7NHVLY",
      "1dfeR4HaWDbWqFHLkxsg1d",
    ].concat(resMyArtists.data.items.map((item: SpotifyApi.ArtistObjectFull): string => {
      return item.id;
    }));

    const resArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/artists?ids=${requestArtists.join(",")}`,
    });

    this.setState({
      artists: resArtists.data.artists,
    });
  }

  public render() {
    return (
      <Main>
        <Home
          artists={this.state.artists}
        />
      </Main>
    );
  }
}

function mapStateToProps(store: ITodoState) {
  return {store};
}

export default connect(mapStateToProps)(TopPage);

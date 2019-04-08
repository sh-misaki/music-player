import * as React from "react";
import Button from "../components/button";
import axios from "axios";
import cookies from "next-cookies";

interface IProps {
  test: string;
}

interface IMusicItem {
  context: {};
  played_at: string;
  track: {};
}

interface IState {
  token: string;
  items: IMusicItem;
}

export default class TopContainer extends React.Component<IProps, IState> {
  private static async getInitialProps(ctx) {
    const { token } = cookies(ctx);
    return { token };
  }

  constructor(props) {
    super(props);

    this.state = {
      token: props.token,
      items: [],
    };
  }

  private async componentDidMount() {
    let { token } = this.state;
    token = token || window.location.hash.split("&")[0].split("=")[1];
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: "https://api.spotify.com/v1/me/player/recently-played",
    });

    document.cookie = `token=${token}`;

    this.setState({
      token: token,
      items: res.data.items,
    });
  }

  private render() {
    const loginUri = "https://accounts.spotify.com/authorize";
    const clientId = "a1bd0a2ad2ce41edb109fdcc95206aea";
    const redirectUri = "http:%2F%2Flocalhost:3000%2F";
    const scope = "user-read-recently-played%20playlist-read-private";
    const { items } = this.state;

    return (
      <div>
        {
          false && (
            <a href={
              `${loginUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&state=123`
            }>
              <Button label="ログイン"/>
            </a>
          )
        }
        <div>
          {
            items.length && (
              <img src={items[0].track.album.images[0].url}/>
            )
          }
        </div>
      </div>
    );
  }
}

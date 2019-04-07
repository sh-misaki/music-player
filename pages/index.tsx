import * as React from "react";
import Button from "../components/button";

interface IProps {
  test: string;
}

export default class TopContainer extends React.Component<IProps> {
  private static getInitialProps({ req }) {
    const hash = !req ? window.location.hash : "";
    return { hash };
  }

  private componentDidMount() {
    const hashString = window.location.hash.split("&")[0].split("=")[1];
  }

  private render() {
    const loginUri = "https://accounts.spotify.com/authorize";
    const clientId = "a1bd0a2ad2ce41edb109fdcc95206aea";
    const redirectUri = "http:%2F%2Flocalhost:3000%2F";
    const scope = "user-read-private%20user-read-email";

    const { hash } = this.props;

    return (
      <div>
        <a href={
          `${loginUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&state=123`
        }>
          <Button label="ログイン"/>
        </a>
        hash: { hash }
      </div>
    );
  }
}

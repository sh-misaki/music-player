import React from "react";
import { connect } from "react-redux";

export interface IPageProps {
  artist: object;
}

class Top extends React.Component<IPageProps> {
  public render() {
    const { artist, } = this.props;
    const {
      images,
    } = artist;

    if ( !Object.keys(artist).length ) { return (<div/>); }
    const imageSrc = images[0].url;

    return (
      <div>
        <img src={imageSrc}/>
      </div>
    );
  }
}

export default connect((state) => state)(Top);

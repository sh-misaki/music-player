import React from "react";
import { connect } from "react-redux";
const { Link } = require("../../../../routes");

export interface IPageProps {
  artists: SpotifyApi.ArtistObjectFull[];
}

class Top extends React.Component<IPageProps> {
  public render() {
    const { artists, } = this.props;
    return (
      <div>
        {
           artists.map((artist) => {
            return (
              <div>
                <Link route="artistsShow" params={{id: artist.id}}>
                  <div>
                    <img src={artist.images[2].url}/>
                    { artist.name }
                  </div>
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default connect((state) => state)(Top);

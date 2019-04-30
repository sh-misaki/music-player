import React from "react";
import { connect } from "react-redux";
const { Link } = require("../../../../routes");
import { IRecommendsState } from "~/stores/modules/recommendations/types";

class Top extends React.Component<IRecommendsState> {
  public render() {
    const { artists, } = this.props;
    return (
      <div>
        {
           artists.map((artist, i) => {
            return (
              <div key={i}>
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

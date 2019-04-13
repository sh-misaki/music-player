import React from "react";
import { connect } from "react-redux";

export interface IPageProps {
  recentlyPlayed: object[];
}

class Top extends React.Component<IPageProps> {
  public render() {
    const { recentlyPlayed, } = this.props;
    const {
      items,
    } = recentlyPlayed;
    console.log(items)
    return (
      <div>
        { items && items.map((item => {
          return (
            <div>
              { item.track.type }
            </div>
          );
        })) }
      </div>
    );
  }
}

export default connect((state) => state)(Top);

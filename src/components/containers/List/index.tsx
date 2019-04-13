import React from "react";

import { connect } from "react-redux";
import {
  Wrapper,
  Image,
  Name,
  Detail,
  PopularityListWrapper,
  PopularityList,
  PopularityListDescription,
  PopularityListDescriptionName,
  PopularityListDescriptionArtist,
  TrackListWrapper,
  TrackList,
  TrackImage,
} from "./style";

export interface IPageProps {
  title: string;
  coverImg: string;
  tracks: object[];
  recommendations: object[];
}

class List extends React.Component<IPageProps> {
  public render() {
    const { title, coverImg, tracks, recommendations } = this.props;

    return (
      <Wrapper backgroundImage={coverImg}>
        <Image>
          <Name>
            { title }
          </Name>
        </Image>
        <Detail>
          <PopularityListWrapper>
            {
              tracks.map((track, index) => {
                const minute = Math.floor(track.duration_ms / 1000 / 60);
                return (
                  <PopularityList>
                    { index }
                    <PopularityListDescription>
                      <PopularityListDescriptionName>
                        { track.name }
                      </PopularityListDescriptionName>
                      <PopularityListDescriptionArtist>
                        { track.artists[0].name }
                      </PopularityListDescriptionArtist>
                    </PopularityListDescription>
                    { minute }:{ Math.floor(track.duration_ms / 1000 - minute * 60) }
                  </PopularityList>
                );
              })
            }
          </PopularityListWrapper>
          <TrackListWrapper>
            { recommendations.map((album) => {
              return (
                <TrackList>
                  <TrackImage src={album.images[1].url}/>
                  <p>{ album.name }</p>
                  <p>{ album.release_date.split("-")[0] }</p>
                </TrackList>
              );
            }) }
          </TrackListWrapper>
        </Detail>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(List);

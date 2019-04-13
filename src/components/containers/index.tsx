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
  artist: object;
  albums: object;
  topTracks: object;
}

class Top extends React.Component<IPageProps> {
  public render() {
    const { artist, albums, topTracks } = this.props;
    const {
      images,
      name,
    } = artist;

    console.log(artist)
    console.log(albums)
    console.log(topTracks)

    if (
      !Object.keys(artist).length ||
      !Object.keys(albums).length ||
      !Object.keys(topTracks).length
    ) { return (<div/>); }
    const imageSrc = images[0].url;

    return (
      <Wrapper backgroundImage={imageSrc}>
        <Image>
          <Name>
            { name }
          </Name>
        </Image>
        <Detail>
          <PopularityListWrapper>
            {
              topTracks.map((track, index) => {
                const minute = Math.floor(track.duration_ms / 1000 / 60);
                return (
                  <PopularityList>
                    { index }
                    <PopularityListDescription>
                      <PopularityListDescriptionName>
                        { track.name }
                      </PopularityListDescriptionName>
                      <PopularityListDescriptionArtist>
                        { name }
                      </PopularityListDescriptionArtist>
                    </PopularityListDescription>
                    { minute }:{ Math.floor(track.duration_ms / 1000 - minute * 60) }
                  </PopularityList>
                )
              })
            }
          </PopularityListWrapper>
          <TrackListWrapper>
            { albums.items.map((album) => {
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

export default connect((state) => state)(Top);

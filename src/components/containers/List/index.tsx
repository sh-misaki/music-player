import React from "react";
import {Link} from "../../../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

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
  Player,
} from "./style";

export interface IPageProps {
  title: string;
  coverImg: string;
  tracks: object[];
  recommendations: object[];
}

class List extends React.Component<IPageProps> {
  public async playMusic(id: string): Promise<void> {
    const token = document.cookie.split("=")[1];

    await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "put",
      url: `https://api.spotify.com/v1/me/player/play`,
      data: {
        uris: [`spotify:track:${id}`],
      },
    });
  }

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
                  <PopularityList onClick={() => this.playMusic(track.id)}>
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
          {
            !!recommendations.length && (
              <TrackListWrapper>
                { recommendations.map((album) => {
                  return (
                    <Link route="albumsShow" params={{id: album.id}}>
                      <TrackList>
                        <TrackImage src={album.images[1].url}/>
                        <p>{ album.name }</p>
                        <p>{ album.release_date.split("-")[0] }</p>
                      </TrackList>
                    </Link>
                  );
                }) }
              </TrackListWrapper>
            )
          }
          <Player>
            <FontAwesomeIcon icon="step-backward" size="2x"/>
            <FontAwesomeIcon icon="play" size="2x"/>
            <FontAwesomeIcon icon="step-forward" size="2x"/>
          </Player>
        </Detail>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(List);

import React from "react";
import analyze from "rgbaster";

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
  tracks: SpotifyApi.TrackObjectSimplified[];
  recommendations: SpotifyApi.AlbumObjectFull[];
}
export interface IPageState {
  mainColor: string;
  subColor: string;
}

const xolor = require("xolor");
const { Link } = require("~/../routes");

class List extends React.Component<IPageProps, IPageState> {
  public constructor(props: IPageProps) {
    super(props);
    this.state = {
      mainColor: "",
      subColor: "",
    };
  }

  public async componentWillMount() {
    const result = await analyze(this.props.coverImg);
    this.setState({
      mainColor: result[0].color,
      subColor: result[1].color,
    });
  }

  public render() {
    const { title, coverImg, tracks, recommendations } = this.props;
    const { mainColor, subColor } = this.state;
    const textColor = xolor(mainColor).inverse();

    return (
      <Wrapper
        backgroundImage={coverImg}
        mainColor={mainColor}
        subColor={subColor}
      >
        <Image>
          <Name color={textColor}>
            { title }
          </Name>
        </Image>
        <Detail color={textColor}>
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
        </Detail>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(List);

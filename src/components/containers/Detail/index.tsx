import React from "react";
import analyze from "rgbaster";

import {
  Wrapper,
  Name,
  Detail,
  Image,
  PopularityListWrapper,
  PopularityList,
  PopularityListDescription,
} from "./style";

import Typography from "~/components/atoms/Typography";

export interface IPageProps {
  title: string;
  description: string;
  mainImg: string;
  coverImg: string;
  tracks: SpotifyApi.TrackObjectSimplified[];
  recommendations: SpotifyApi.AlbumObjectFull[];
}
export interface IPageState {
  mainColor: string;
  subColor: string;
}

const xolor = require("xolor");

function blackOrWhite(hexcolor: string) {
  const r = parseInt( hexcolor.substr( 1, 2 ), 16 ) ;
  const g = parseInt( hexcolor.substr( 3, 2 ), 16 ) ;
  const b = parseInt( hexcolor.substr( 5, 2 ), 16 ) ;
  return ( ( ( (r * 299) + (g * 587) + (b * 114) ) / 1000 ) < 128 ) ? "white" : "black" ;
}

export default class List extends React.Component<IPageProps, IPageState> {
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
    const { title, description, mainImg, coverImg, tracks, } = this.props;
    const { mainColor, subColor } = this.state;
    const textColor = blackOrWhite(xolor(mainColor).hex);

    return (
      <Wrapper
        backgroundImage={coverImg}
        mainColor={mainColor}
        subColor={subColor}
      >
        <Name>
          <Typography
            type="title"
            color={textColor}
          >
            { title }
          </Typography>
          <Typography
            color={textColor}
            type="subTitle"
          >
            {description}
          </Typography>
        </Name>
        <Detail color={textColor}>
          <Image src={mainImg} />
          <PopularityListWrapper>
            {
              tracks.map((track, index) => {
                const durationSec = track.duration_ms / 1000;
                const minute = Math.floor(durationSec / 60);
                const second = Math.floor(durationSec - minute * 60);
                return (
                  <PopularityList>
                    <Typography color={textColor}>
                      { index + 1 }
                    </Typography>
                    <PopularityListDescription>
                      <Typography color={textColor}>
                        { track.name }
                      </Typography>
                      <Typography
                        type="note"
                        color={textColor}
                      >
                        { track.artists[0].name }
                      </Typography>
                    </PopularityListDescription>
                    <Typography color={textColor}>
                      { minute }:{ second < 10 ? `0${second}` : second }
                    </Typography>
                  </PopularityList>
                );
              })
            }
          </PopularityListWrapper>
        </Detail>
      </Wrapper>
    );
  }
}

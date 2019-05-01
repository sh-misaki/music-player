import React from "react";
import { connect } from "react-redux";
const { Link } = require("../../../../routes");

import Typography from "~/components/atoms/Typography";
import {
  Wrapper,
  Favorite,
  Playlist,
  PlaylistItem,
  PlaylistItemImage,
  Recommend,
  RecommendList,
  RecommendListImage,
  Artists,
  ArtistsList,
  ArtistsListImage,
  Suggests,
} from "./style";

import { IRecommendsState } from "~/stores/modules/recommendations/types";

class Top extends React.Component<IRecommendsState> {
  public render() {
    const { artists, recommendTracks, featuredPlaylists, newReleases } = this.props;
    return (
      <Wrapper>
        <Favorite>
          <Typography type="subTitle">
            Featured Playlists
          </Typography>
          <Playlist>
            {
              featuredPlaylists.map((playlist, i) => {
                return (
                  <Link route="album" params={{id: playlist.id}}>
                    <PlaylistItem key={i}>
                      <PlaylistItemImage src={playlist.images[0].url}/>
                      <Typography>
                        { playlist.name }
                      </Typography>
                    </PlaylistItem>
                  </Link>
                );
              })
            }
          </Playlist>
          <Typography type="subTitle">
            Artists
          </Typography>
          <Artists>
            {
              artists.map((artist, i) => {
                return (
                  <Link route="artist" params={{id: artist.id}}>
                    <ArtistsList key={i}>
                      <ArtistsListImage src={artist.images[2].url}/>
                      <Typography>
                        { artist.name }
                      </Typography>
                    </ArtistsList>
                  </Link>
                );
              })
            }
          </Artists>
        </Favorite>
        <Suggests>
          <div>
            <Typography type="subTitle">
              Recommendations
            </Typography>
            <Recommend>
              {
                recommendTracks.map((track, i) => {
                  return (
                    <Link
                      route="album"
                      params={{id: track.album.id}}
                      key={i}
                    >
                      <RecommendList>
                        <RecommendListImage src={track.album.images[0].url}/>
                        <div>
                          <Typography>
                            { track.album.name }
                          </Typography>
                          <Typography type="note">
                            { track.artists[0].name }
                          </Typography>
                        </div>
                      </RecommendList>
                    </Link>
                  );
                })
              }
            </Recommend>
          </div>
          <div>
            <Typography type="subTitle">
              New Releases
            </Typography>
            <Recommend>
            {
                newReleases.map((album, i) => {
                  return (
                    <Link
                      route="album"
                      params={{id: album.id}}
                      key={i}
                    >
                      <RecommendList>
                        <RecommendListImage src={album.images[0].url}/>
                        <div>
                          <Typography>
                            { album.name }
                          </Typography>
                          <Typography type="note">
                            { album.artists[0].name }
                          </Typography>
                        </div>
                      </RecommendList>
                    </Link>
                  );
                })
              }
            </Recommend>
          </div>
        </Suggests>
      </Wrapper>
    );
  }
}

export default connect((state) => state)(Top);

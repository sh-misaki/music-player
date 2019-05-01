import axios from "axios";

import { actionTypes } from "./types";

const fetchList = ({
  artist,
  albums,
  topTracks,
}: {
  artist: SpotifyApi.ArtistObjectFull,
  albums: SpotifyApi.AlbumObjectFull[],
  topTracks: SpotifyApi.TrackObjectFull[],
}) => {
  return {
    type: actionTypes.FETCH_LIST,
    artist,
    albums,
    topTracks,
  };
};

const fetchListAsync = (token: string, id: string) => {
  return async (dispatch: any) => {
    const res = await axios.all([
      `${id}`,
      `${id}/albums`,
      `${id}/top-tracks?country=jp`,
    ].map((path: string) => {
      return axios.create({
        headers: { Authorization: `Bearer ${token}`, },
      }).get(`https://api.spotify.com/v1/artists/${path}`);
    }));
    dispatch(fetchList({
      artist: res[0].data,
      albums: res[1].data,
      topTracks: res[2].data.tracks,
    }));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

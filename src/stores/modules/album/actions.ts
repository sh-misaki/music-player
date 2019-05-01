import axios from "axios";

import { actionTypes } from "./types";

const fetchList = (
  album: SpotifyApi.AlbumObjectFull,
  artist: SpotifyApi.ArtistObjectFull,
) => {
  return {
    type: actionTypes.FETCH_LIST,
    album,
    artist,
  };
};

const fetchListAsync = (token: string, id: string) => {
  return async (dispatch: any) => {
    const resAlbums = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/albums/${id}`,
    });
    const resArtist = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/artists/${resAlbums.data.artists[0].id}`,
    });
    dispatch(fetchList(resAlbums.data, resArtist.data));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

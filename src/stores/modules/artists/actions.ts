import axios from "axios";

import { actionTypes } from "./types";

const fetchList = (artists: SpotifyApi.ArtistObjectFull[]) => {
  return {
    type: actionTypes.FETCH_LIST,
    artists
  };
};

const fetchListAsync = (token: string) => {
  return async (dispatch: any) => {
    const resArtists = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/me/following?type=artist`,
    });
    dispatch(fetchList(resArtists.data.artists.items));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

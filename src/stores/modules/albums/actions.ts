import axios from "axios";

import { actionTypes } from "./types";

const fetchList = (album: SpotifyApi.AlbumObjectFull) => {
  return {
    type: actionTypes.FETCH_LIST,
    album
  };
};

const fetchListAsync = (token: string, id: string) => {
  return async (dispatch: any) => {
    const resAlbums = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/albums/${id}`,
    });
    dispatch(fetchList(resAlbums.data));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

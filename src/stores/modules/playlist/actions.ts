import axios from "axios";

import { actionTypes } from "./types";

const fetchList = (playlist: SpotifyApi.PlaylistObjectFull) => {
  return {
    type: actionTypes.FETCH_LIST,
    playlist
  };
};

const fetchListAsync = (token: string, id: string) => {
  return async (dispatch: any) => {
    const resPlaylist = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/playlists/${id}`,
    });
    dispatch(fetchList(resPlaylist.data));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

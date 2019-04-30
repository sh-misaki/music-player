import axios from "axios";

import { actionTypes, IRecommendsState } from "./types";

const fetchList = (sourceData: IRecommendsState) => {
  return {
    type: actionTypes.FETCH_LIST,
    artists: sourceData.artists,
    newReleases: sourceData.newReleases,
    featuredPlaylists: sourceData.featuredPlaylists,
    recommendTracks: sourceData.recommendTracks,
  };
};

const fetchListAsync = (token: string) => {
  return async (dispatch: any) => {
    const res = await axios.all([
      "/me/following?type=artist",
      "/browse/new-releases?country=JP",
      "/browse/featured-playlists",
    ].map((path: string) => {
      return axios.create({
        headers: { Authorization: `Bearer ${token}`, },
      }).get(`https://api.spotify.com/v1${path}`);
    }));

    const seedArtist = res[0].data.artists.items[res[0].data.artists.total - 1].id;
    const resRecommendation = await axios({
      headers: { Authorization: `Bearer ${token}`, },
      method: "get",
      url: `https://api.spotify.com/v1/recommendations?seed_artists=${seedArtist}`,
    });

    dispatch(fetchList({
      artists: res[0].data.artists.items,
      newReleases: res[1].data.albums.items,
      featuredPlaylists: res[2].data.playlists.items,
      recommendTracks: resRecommendation.data.tracks,
    }));
  };
};

export default {
  fetchList,
  fetchListAsync,
};

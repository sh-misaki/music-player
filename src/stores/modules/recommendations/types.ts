const FETCH_LIST = "FETCH_LIST";
const FETCH_LIST_ASYNC = "FETCH_LIST_ASYNC";

export const actionTypes = {
  FETCH_LIST,
  FETCH_LIST_ASYNC,
};

export interface IRecommendsState {
  artists: SpotifyApi.ArtistObjectFull[];
  newReleases: SpotifyApi.AlbumObjectFull[];
  featuredPlaylists: SpotifyApi.PlaylistObjectFull[];
  recommendTracks: SpotifyApi.TrackObjectSimplified[];
}

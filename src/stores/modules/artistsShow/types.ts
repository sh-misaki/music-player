const FETCH_LIST = "FETCH_LIST";
const FETCH_LIST_ASYNC = "FETCH_LIST_ASYNC";

export const actionTypes = {
  FETCH_LIST,
  FETCH_LIST_ASYNC,
};

export default interface IArtistState {
  artist: SpotifyApi.ArtistObjectFull | {};
  albums: SpotifyApi.AlbumObjectFull[];
  topTracks: SpotifyApi.TrackObjectFull[];
}

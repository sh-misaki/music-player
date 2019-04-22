const FETCH_LIST = "FETCH_LIST";

export const actionTypes = {
  FETCH_LIST,
};

export interface ITodoState {
  artists: SpotifyApi.ArtistObjectFull[];
}

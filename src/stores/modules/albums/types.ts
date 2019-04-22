const FETCH_LIST = "FETCH_LIST";
const FETCH_LIST_ASYNC = "FETCH_LIST_ASYNC";

export const actionTypes = {
  FETCH_LIST,
  FETCH_LIST_ASYNC,
};

export default interface IAlbumsState {
  albums: SpotifyApi.AlbumObjectFull[];
}

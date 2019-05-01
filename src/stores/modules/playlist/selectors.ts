import { IPlaylistState } from "./types";

function checkIfAlbumExist( duck: IPlaylistState ) {
  return Object.keys(duck.playlist).length > 0;
}

export default {
  checkIfAlbumExist
};

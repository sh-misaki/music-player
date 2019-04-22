import IAlbumsState from "./types";

function checkIfAlbumExist( duck: IAlbumsState ) {
  return Object.keys(duck.album).length > 0;
}

export default {
  checkIfAlbumExist
};

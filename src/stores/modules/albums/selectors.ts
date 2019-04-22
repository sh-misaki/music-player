import IAlbumsState from "./types";

function checkIfAlbumsExist( duck: IAlbumsState ) {
  return duck.albums.length > 0;
}

export default {
  checkIfAlbumsExist
};

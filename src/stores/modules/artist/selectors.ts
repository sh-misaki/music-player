import { IArtistState } from "./types";

function checkIfArtistExist( duck: IArtistState ) {
  return Object.keys(duck.artist).length > 0;
}

export default {
  checkIfArtistExist
};

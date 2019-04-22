import IArtistsState from "./types";

function checkIfArtistExist( duck: IArtistsState ) {
  return Object.keys(duck.artist).length > 0;
}

export default {
  checkIfArtistExist
};

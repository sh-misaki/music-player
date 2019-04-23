import { IArtistsState } from "./types";

function checkIfArtistsExist( duck: IArtistsState ) {
  return duck.artists.length > 0;
}

export default {
  checkIfArtistsExist
};

import { IRecommendsState } from "./types";

function checkIfArtistsExist( duck: IRecommendsState ) {
  return duck.artists.length > 0;
}

export default {
  checkIfArtistsExist
};

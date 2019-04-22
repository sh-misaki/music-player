import { ITodoState } from "./types";

function checkIfArtistsExist( duck: ITodoState ) {
  return duck.artists.length > 0;
}

export default {
  checkIfArtistsExist
};

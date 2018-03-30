import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  }
};

export const receiveSinglePokemon = (payload) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon: payload.pokemon,
  items: payload.items
});


export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);

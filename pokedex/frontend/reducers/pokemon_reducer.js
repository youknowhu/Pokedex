import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

function pokemonReducer(state = {}, action) {
  Object.freeze(state);
  const { pokemon } = action;
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      newState = merge({}, state, {[pokemon.id]: pokemon});
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;

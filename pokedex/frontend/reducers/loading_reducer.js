import { START_LOADING_ALL_POKEMON, START_LOADING_SINGLE_POKEMON } from '../actions/loading_actions';

function loadingReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case START_LOADING_ALL_POKEMON:

    default:
      return state;
  }
}

export default loadingReducer;

import { values } from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);


export const selectSinglePokemon = (state, id) => (
  state.entities.pokemon[id]
);

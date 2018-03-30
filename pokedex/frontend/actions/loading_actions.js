export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON";
export const START_LOADING_SINGLE_POKEMON = "START_LOADING_SINGLE_POKEMON";

export const loadAllPokemon = () => ({
  type: START_LOADING_ALL_POKEMON
});

export const loadSinglePokemon = () => ({
  type: START_LOADING_SINGLE_POKEMON
});

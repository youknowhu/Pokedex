import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    console.log(this.props.pokemon);
    return (
      <aside className="pokedex">
        <ul>
          {
            this.props.pokemon.map( pokemon => (
              <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
              )
            )
          }
        </ul>
      </aside>
    );
  }
}

export default PokemonIndex;

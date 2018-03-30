import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.pokemon.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.pokemon.id !== newProps.pokemon.id) {
      this.props.requestSinglePokemon(newProps.pokemon.id);
    }
  }

  render() {
    const { pokemon, items } = this.props;
    console.log(pokemon);
    if (!pokemon.moves) return <div id="loading-pokeball"></div>;
    return (
    <div className="pokemon-detail">
      <ul>
        <li><img src={pokemon.image_url}></img></li>
        <li>{pokemon.name}</li>
        <li>Type: {pokemon.poke_type}</li>
        <li>Attack: {pokemon.attack}</li>
        <li>Defense: {pokemon.defense}</li>
        <li>Moves: {pokemon.moves.join(", ")}</li>
        <li> Items:
          <div className="item-display">
            <ul className="pokemon-index-item">
              {
                Object.values(items).map( item => <li className="pokemon-index-item" key={item.id}><img src={item.image_url}></img></li>)
              }
            </ul>
          </div>
        </li>
      </ul>
    </div>
    );

  }
}

export default PokemonDetail;

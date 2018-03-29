import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match);
    this.props.requestSinglePokemon();
  }

  render() {
    return (
    <div>
    </div>
      // <Route path={`/pokemon/${this.props.pokemon.id}`} >
      //
      // </Route>
    );

  }
}

export default PokemonDetail;

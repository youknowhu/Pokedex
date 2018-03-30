import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.id];
  return {
    pokemon,
    items: state.entities.items
  };
};


const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => {
    const action = requestSinglePokemon(id);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

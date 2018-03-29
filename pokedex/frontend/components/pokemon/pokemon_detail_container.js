import { connect } from 'react-redux';
import { selectSinglePokemon } from '../../reducers/selectors';
import { RECEIVE_SINGLE_POKEMON } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  details: state
});


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

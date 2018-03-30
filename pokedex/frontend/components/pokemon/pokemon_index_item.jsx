import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) =>  {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <li className="pokemon-index-item">
        <h3>{pokemon.id}</h3>
        <img src={pokemon.image_url}></img>
        <h3>{pokemon.name}</h3>
      </li>
    </Link>
  );
};

export default PokemonIndexItem;

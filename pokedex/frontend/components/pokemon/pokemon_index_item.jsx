import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) =>  {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <h3>{pokemon.id}</h3>
        <img src={pokemon.image_url}></img>
        <h3>{pokemon.name}</h3>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;

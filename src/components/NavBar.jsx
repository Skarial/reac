import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ onPrevClick, onNextClick, pokemonList, onPokemonButtonClick, activeIndex }) {
  return (
    <nav>
      <div className='button-container'>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => onPokemonButtonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
      <div className='button-container'>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
  onPokemonButtonClick: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default NavBar;

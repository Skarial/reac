import React, { useState } from "react";
import './App.css';
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import PropTypes from 'prop-types';
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  }
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  const handlePrevClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  return (
    <div>
     <NavBar
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        pokemonList={pokemonList}
        onPokemonButtonClick={setPokemonIndex}
        activeIndex={pokemonIndex}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;

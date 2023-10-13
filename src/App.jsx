import "./App.css"
import PokemonCard from "./components/PokemonCard"
import React, { useState } from "react"

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    id: "1",
    desc: "Fleur sur le dos. Plante/Venin",
    pkmnTypes: ["Plante", "Venin"],
  },
 
  {
    name: "Nidorino",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    id: "33",
    desc: "Masculin et venimeux. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Nidoking",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    id: "34",
    desc: "Roi venimeux. Poison/Terre",
    pkmnTypes: ["Poison", "Terre"],
  },
  {
    name: "Mélofée",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    id: "35",
    desc: "Fée lunaire. Fée",
    pkmnTypes: ["Fée"],
  },
  {
    name: "Mélodelfe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    id: "36",
    desc: "Fée lunaire majestueuse. Fée",
    pkmnTypes: ["Fée"],
  },
  {
    name: "Goupix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    id: "37",
    desc: "Renard à neuf queues. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Feunard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    id: "38",
    desc: "Esprit malin. Feu",
    pkmnTypes: ["Feu"],
  },
  {
    name: "Rondoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    id: "39",
    desc: "Chant mélodieux. Normal/Fée",
    pkmnTypes: ["Normal", "Fée"],
  },
  {
    name: "Grodoudou",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    id: "40",
    desc: "Chant majestueux. Normal/Fée",
    pkmnTypes: ["Normal", "Fée"],
  },
  {
    name: "Nosferapti",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    id: "41",
    desc: "Chauve-souris. Poison/Vol",
    pkmnTypes: ["Poison", "Vol"],
  },
  
  {
    name: "Grotadmorv",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    id: "89",
    desc: "Plus grand et toxique. Poison",
    pkmnTypes: ["Poison"],
  },
  {
    name: "Kokiyas",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    id: "90",
    desc: "Crabe. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Crustabri",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    id: "91",
    desc: "Crabe géant. Eau/Glace",
    pkmnTypes: ["Eau", "Glace"],
  },
  {
    name: "Fantominus",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    id: "92",
    desc: "Fantôme. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Spectrum",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    id: "93",
    desc: "Spectre supérieur. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Ectoplasma",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    id: "94",
    desc: "Mange les rêves. Spectre/Poison",
    pkmnTypes: ["Spectre", "Poison"],
  },
  {
    name: "Onix",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    id: "95",
    desc: "Serpent de roche. Roche/Sol",
    pkmnTypes: ["Roche", "Sol"],
  },
  {
    name: "Hypotrempe",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    id: "116",
    desc: "Bébé dragon. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Hypocéan",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    id: "117",
    desc: "Requin dragon. Eau/Vol",
    pkmnTypes: ["Eau", "Vol"],
  },
  {
    name: "Poissirène",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    id: "118",
    desc: "Sirène de mer. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Poissoroy",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    id: "119",
    desc: "Royauté marine. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Stari",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    id: "120",
    desc: "Étoile de mer. Eau",
    pkmnTypes: ["Eau"],
  },
  {
    name: "Staross",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    id: "121",
    desc: "Étoile de mer géante. Eau/Psy",
    pkmnTypes: ["Eau", "Psy"],
  },
  {
    name: "M. Mime",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    id: "122",
    desc: "Clown mime. Psy/Fée",
    pkmnTypes: ["Psy", "Fée"],
  },
  {
    name: "Kabuto",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    id: "140",
    desc: "Fossile carapace. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Kabutops",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    id: "141",
    desc: "Fossile carapace aiguisée. Roche/Eau",
    pkmnTypes: ["Roche", "Eau"],
  },
  {
    name: "Ptera",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    id: "142",
    desc: "Fossile volant. Roche/Vol",
    pkmnTypes: ["Roche", "Vol"],
  },
  {
    name: "Ronflex",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    id: "143",
    desc: "Sommeil éternel. Normal",
    pkmnTypes: ["Normal"],
  },
  {
    name: "Artikodin",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    id: "144",
    desc: "Oiseau glacial. Glace/Vol",
    pkmnTypes: ["Glace", "Vol"],
  },
  {
    name: "Électhor",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    id: "145",
    desc: "Oiseau électrique. Électrique/Vol",
    pkmnTypes: ["Électrique", "Vol"],
  },
  {
    name: "Sulfura",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    id: "146",
    desc: "Oiseau enflammé. Feu/Vol",
    pkmnTypes: ["Feu", "Vol"],
  },
  {
    name: "Minidraco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    id: "147",
    desc: "Dragon juvénile. Dragon",
    pkmnTypes: ["Dragon"],
  },
  {
    name: "Draco",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    id: "148",
    desc: "Dragon en croissance. Dragon",
    pkmnTypes: ["Dragon"],
  },
  {
    name: "Dracolosse",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    id: "149",
    desc: "Dragon de légende. Dragon/Vol",
    pkmnTypes: ["Dragon", "Vol"],
  },
  {
    name: "Mewtwo",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    id: "150",
    desc: "Génétiquement modifié. Psy",
    pkmnTypes: ["Psy"],
  },
  {
    name: "Mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    id: "151",
    desc: "Génétiquement unique. Psy",
    pkmnTypes: ["Psy"],
  },
]

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  const handlePrevClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }

  return (
    <div>
      {pokemonIndex > 0 && <button onClick={handlePrevClick}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNextClick}>Suivant</button>
      )}

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App;

import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/nav/nav";
import PokemonContext from "./providers/pokemon.provider";
import PokemonList from "./components/pokemonList/pokemonList";
import { Pokemon } from "./container/pokemon";

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          // `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          pokemon.url
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  return (
    <div className="App">
      <div className="main-container">
        <header className="pokemon-header">
          <Nav></Nav>
        </header>
        <PokemonContext.Provider value={pokemons}>
          <PokemonList />
        </PokemonContext.Provider>
      </div>
    </div>
  );
};

export default App;

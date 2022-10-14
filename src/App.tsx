import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/nav/nav";
import PokemonList from "./components/pokemonList/pokemonList";
import { Pokemon } from "./container/pokemon";

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );

      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    let res = await axios.get(nextUrl);

    setNextUrl(res.data.next);

    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  };

  return (
    <div className="App">
      <div className="main-container">
        <header className="pokemon-header">
          <Nav></Nav>
        </header>
        <PokemonList pokemons={pokemons} />
        <button onClick={nextPage}>Charger</button>
      </div>
    </div>
  );
};

export default App;

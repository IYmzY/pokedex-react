import React, { useContext, useState, useEffect } from "react";
import { Pokemon } from "../../container/pokemon";
import "./pokemonList.scss";
import PokemonCard from "../pokemonCard/pokemonCard";
import PokemonContext from "../../providers/pokemon.provider";

// interface Props {
//   pokemons: Pokemon[];
// }

const PokemonList: React.FC = () => {
  // const { pokemons } = props;
  const pokemons = useContext(PokemonContext);
  const [write, setWrite] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [filteredPokemon, setFiltering] = useState(pokemons);

  useEffect(() => {
    setFiltering(
      pokemons
        .filter((pokemon) => pokemon.name.includes(write))
        .sort((a, b) => a.id - b.id)
    );
  }, [write, pokemons]);

  useEffect(() => {
    setFiltering(
      pokemons
        .filter((pokemon) => pokemon.types[0].type.name.includes(pokemonType))
        .sort((a, b) => a.id - b.id)
    );
    console.log(pokemonType);
  }, [pokemonType, pokemons]);

  return (
    <>
      <input
        defaultValue={write}
        className="filter-name-search"
        type="text"
        onChange={(e) => {
          setWrite(e.target.value);
        }}
      />
      <select
        defaultValue={pokemonType}
        className="filter-type-search"
        onChange={(e) => {
          setPokemonType(e.target.value);
        }}
      >
        <option value="fire">Fire</option>
        <option value="grass">Grass</option>
        <option value="water">Water</option>
        <option value="poison">Poison</option>
        <option value="normal">Normal</option>
        <option value="rock">Rock</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="bug">Bug</option>
        <option value="steel">Steel</option>
        <option value="ghost">Ghost</option>
      </select>
      <section className="collection-container">
        {filteredPokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonList;

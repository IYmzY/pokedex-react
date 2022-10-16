import React, { useContext, useState, useEffect } from "react";
//import { Pokemon } from "../../container/pokemon";
import "./pokemonList.scss";
import PokemonCard from "../pokemonCard/pokemonCard";
import PokemonContext from "../../providers/pokemon.provider";
import PokemonDetail from "../detailPokemon/detailPokemon";

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
        .filter((pokemon) => pokemon.types[0].type.name.includes(pokemonType))
        .sort((a, b) => a.id - b.id)
    );
  }, [write, pokemons, pokemonType]);

  // useEffect(() => {
  //   setFiltering(
  //     pokemons
  //       .filter((pokemon) => pokemon.types[0].type.name.includes(pokemonType))
  //       .sort((a, b) => a.id - b.id)
  //   );
  //   console.log(pokemonType);
  // }, [pokemonType, pokemons]);

  return (
    <>
      <input
        defaultValue={write}
        className="filter-name-search"
        type="text"
        placeholder="Search By Name"
        onChange={(e) => {
          setWrite(e.target.value);
        }}
      />
      <select
        placeholder="Search By Type"
        defaultValue={pokemonType}
        className="filter-type-search"
        onChange={(e) => {
          setPokemonType(e.target.value);
        }}
      >
        <option value="">All</option>
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
        <option value="fairy">Fairy</option>
        <option value="ground">Ground</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
      </select>
      <section className="collection-container">
        {filteredPokemon.map((pokemon) => {
          console.log(pokemon);
          return (
            <div className="pokemon-card" key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
              />
              <PokemonDetail
                name={pokemon.name}
                id={pokemon.id}
                images={pokemon.sprites}
                types={pokemon.types}
                abilities={pokemon.abilities}
                height={pokemon.height}
                moves={pokemon.moves}
                weight={pokemon.weight}
              ></PokemonDetail>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonList;

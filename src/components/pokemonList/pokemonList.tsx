import React from "react";
import { Pokemon } from "../../container/pokemon";
import "./pokemonList.scss";
import PokemonCard from "../pokemonCard/pokemonCard";

interface Props {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          );
        })}
      </section>
    </>
  );
};

export default PokemonList;

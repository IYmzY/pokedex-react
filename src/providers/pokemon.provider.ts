import React, { createContext } from "react";
import { Pokemon } from "../container/pokemon";

// const PokemonContext = createContext({});

// export const PokemonProvider = () => {
//   return <PokemonContext.Provider value={""}></PokemonContext.Provider>;
// };

const PokemonContext = React.createContext(<Pokemon[]>[]);

export default PokemonContext;

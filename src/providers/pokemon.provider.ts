import { createContext } from "react";
import { Pokemon } from "../container/pokemon";

// const PokemonContext = createContext({});

// export const PokemonProvider = () => {
//   return <PokemonContext.Provider value={""}></PokemonContext.Provider>;
// };

const PokemonContext = createContext(<Pokemon[]>[]);

export default PokemonContext;

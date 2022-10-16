export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
  };
  abilities: {};
  weight: number;
  height: number;
  moves: {};
  types: {
    type: {
      name: string;
    };
  }[];
}

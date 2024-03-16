import { createContext } from "react";

export type PokemonContextProps = {
  showDetailPokemon: boolean;
  showPokemonById: (pokenonId: number) => void;
  closePokemonDetail: () => void;
};

const EMPTY_PARAMS = {
  showDetailPokemon: false,
  showPokemonById: () => undefined,
  closePokemonDetail: () => undefined,
};

const PokemonContext = createContext<PokemonContextProps>(EMPTY_PARAMS);

export default PokemonContext;

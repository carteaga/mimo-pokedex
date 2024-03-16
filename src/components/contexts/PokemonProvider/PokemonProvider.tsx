import React from "react";
import PokemonContext from "./PokemonContext";

type PokemonProviderProps = {
  children: React.ReactNode;
};

const PokemonProvider = (props: PokemonProviderProps) => {
  const { children } = props;

  const [showDetailPokemon, setShowDetailPokemon] = React.useState(false);
  const showPokemonById = () => {
    setShowDetailPokemon(true);
  };
  const closePokemonDetail = () => {
    setShowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemonById,
        closePokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

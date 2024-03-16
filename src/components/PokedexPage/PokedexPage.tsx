import React from "react";
import PokemonListContainer from "../PokemonList/PokemonListContainer";
import PokemonInputSearch from "./PokemonInputSearch";
import { useDebounce } from "../hooks/useDebounce";
import { PokedexContainer } from "./PokedexContainer";
import usePokemonContext from "../contexts/PokemonProvider/usePokemonContext";

const PokedexPage = () => {
  const [search, setSearch] = React.useState("");
  const searchDebounced = useDebounce(search);
  const { showPokemonById } = usePokemonContext();

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;

    setSearch(value);
  };

  const handlePokemonClick = (pokemonId: number) => {
    showPokemonById(pokemonId);
  };

  return (
    <PokedexContainer>
      <PokemonInputSearch onChange={handleInputSearch} />
      <PokemonListContainer
        filterByName={searchDebounced}
        onPokemonClick={handlePokemonClick}
      />
    </PokedexContainer>
  );
};

export default PokedexPage;

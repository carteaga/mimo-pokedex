import React from "react";
import PokemonListContainer from "../PokemonList/PokemonListContainer";
import PokemonInputSearch from "./PokemonInputSearch";
import { useDebounce } from "../hooks/useDebounce";
import { PokedexContainer } from "./PokedexContainer";

const PokedexPage = () => {
  const [search, setSearch] = React.useState("");
  const searchDebounced = useDebounce(search);

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;

    setSearch(value);
  };

  return (
    <PokedexContainer>
      <PokemonInputSearch onChange={handleInputSearch} />
      <PokemonListContainer filterByName={searchDebounced} />
    </PokedexContainer>
  );
};

export default PokedexPage;

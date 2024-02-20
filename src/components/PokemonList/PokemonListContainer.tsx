import { usePokemonList } from "../hooks";
import { PokemonList } from ".";

const PokemonListContainer = () => {
  const { data: pokemonResumeList = [] } = usePokemonList();

  return <PokemonList pokemonResume={pokemonResumeList} />;
};

export default PokemonListContainer;

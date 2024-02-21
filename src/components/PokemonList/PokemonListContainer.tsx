import { usePokemonList } from "../hooks";
import { PokemonList } from ".";
import { filterPokemonsResumenByName } from "./PokemonList.utils";

type PokemonListContainerProps = {
  filterByName?: string;
};

const PokemonListContainer = (props: PokemonListContainerProps) => {
  const { filterByName } = props;

  const { data: pokemonResumeList = [] } = usePokemonList();

  const pokemonFiltered = !!filterByName
    ? pokemonResumeList.filter(filterPokemonsResumenByName(filterByName))
    : pokemonResumeList;

  return <PokemonList pokemonResume={pokemonFiltered} />;
};

export default PokemonListContainer;

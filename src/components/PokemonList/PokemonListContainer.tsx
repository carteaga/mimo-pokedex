import { usePokemonList } from "../hooks";
import { PokemonList } from ".";
import { filterPokemonsResumenByName } from "./PokemonList.utils";
import { isEmpty } from "../../utils";

type PokemonListContainerProps = {
  filterByName?: string;
};

const PokemonListContainer = (props: PokemonListContainerProps) => {
  const { filterByName } = props;

  const { data: pokemonResumeList = [] } = usePokemonList();

  const pokemonFiltered = isEmpty(filterByName)
    ? pokemonResumeList
    : pokemonResumeList.filter(filterPokemonsResumenByName(filterByName));

  return <PokemonList pokemonResume={pokemonFiltered} />;
};

export default PokemonListContainer;

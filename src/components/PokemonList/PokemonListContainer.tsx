import { usePokemonList } from "../hooks";
import { PokemonList } from ".";
import { filterListPokemonByName } from "./PokemonList.utils";
import { useIntersectionObserver } from "../hooks/useInterserctionObserver/useIntersectionObserver";

type PokemonListContainerProps = {
  filterByName?: string;
};

const PokemonListContainer = (props: PokemonListContainerProps) => {
  const { filterByName } = props;

  const { data: pokemonResumeList = [], fetchNextPage } = usePokemonList();
  const pokemonFiltered = filterListPokemonByName(
    pokemonResumeList,
    filterByName
  );

  const { isIntersecting, ref } = useIntersectionObserver();

  if (isIntersecting) {
    fetchNextPage();
  }

  return (
    <>
      <PokemonList pokemonResume={pokemonFiltered} />
      <span ref={ref} />
    </>
  );
};

export default PokemonListContainer;

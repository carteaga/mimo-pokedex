import { usePokemonList } from "../hooks";
import { PokemonList } from ".";
import { filterListPokemonByName } from "./PokemonList.utils";
import { useIntersectionObserver } from "../hooks/useInterserctionObserver/useIntersectionObserver";

type PokemonListContainerProps = {
  filterByName?: string;
  onPokemonClick?: (pokemonById: number) => void;
};

const PokemonListContainer = (props: PokemonListContainerProps) => {
  const { filterByName, onPokemonClick = () => {} } = props;

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
      <PokemonList
        pokemonResume={pokemonFiltered}
        onPokemonClick={onPokemonClick}
      />
      <span ref={ref} />
    </>
  );
};

export default PokemonListContainer;

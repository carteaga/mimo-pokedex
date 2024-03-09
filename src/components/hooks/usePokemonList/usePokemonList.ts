import { useInfiniteQuery } from "react-query";
import { AxiosError } from "axios";
import { getPokemons } from "../../../services";
import { PokemonResume } from "../../../entities/Pokemon";

const usePokemonList = () => {
  const { data, isLoading, fetchNextPage, isFetching } = useInfiniteQuery<
    PokemonResume[],
    AxiosError
  >({
    queryKey: ["pokemon-list"],
    queryFn: ({ pageParam = 1 }) =>
      getPokemons({ itemsPerPage: 100, page: pageParam }),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  return { data: data?.pages.flat(), isLoading, fetchNextPage, isFetching };
};

export default usePokemonList;

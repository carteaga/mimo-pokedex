import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getPokemons } from "../../../services";
import { PokemonResume } from "../../../entities/Pokemon";
import { DAY_IN_MS } from "../../../utils";

const usePokemonList = () => {
  const { data, isLoading } = useQuery<PokemonResume[], AxiosError>(
    "pokemon-list",
    getPokemons,
    {
      staleTime: DAY_IN_MS,
    }
  );

  return { data, isLoading };
};

export default usePokemonList;

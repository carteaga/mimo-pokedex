import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getPokemons } from "../../../services";
import { PokemonResume } from "../../../entities/Pokemon";

const usePokemonList = () => {
  const { data, isLoading } = useQuery<PokemonResume[], AxiosError>(
    "pokemon-list",
    getPokemons
  );

  return { data, isLoading };
};

export default usePokemonList;

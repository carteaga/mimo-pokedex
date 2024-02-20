import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getPokemonDetail } from "../../../services";
import { Pokemon } from "../../../entities/Pokemon";

const usePokemonDetail = (url: string) => {
  const { data, isLoading } = useQuery<Pokemon, AxiosError>(
    ["pokemon-list", url],
    () => getPokemonDetail(url)
  );

  return { data, isLoading };
};

export default usePokemonDetail;

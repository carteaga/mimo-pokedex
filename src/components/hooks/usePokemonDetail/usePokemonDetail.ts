import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getPokemonDetail } from "../../../services";
import { Pokemon } from "../../../entities/Pokemon";
import { DAY_IN_MS } from "../../../utils";

const usePokemonDetail = (url: string) => {
  const { data, isLoading } = useQuery<Pokemon, AxiosError>(
    ["pokemon-detail", url],
    () => getPokemonDetail(url),
    {
      staleTime: DAY_IN_MS,
    }
  );

  return { data, isLoading };
};

export default usePokemonDetail;

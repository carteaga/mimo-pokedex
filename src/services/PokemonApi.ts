import axios from "axios";
import { Pokemon, PokemonListRequest } from "../entities/Pokemon";

const API = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_CONFIG: Required<getPokemonsProps> = {
  page: 1,
  itemsPerPage: 100,
};

type getPokemonsProps = {
  page?: number;
  itemsPerPage?: number;
};

export const getPokemons = async (props: getPokemonsProps = {}) => {
  const { page, itemsPerPage } = { ...DEFAULT_CONFIG, ...props };

  const offset = (page - 1) * itemsPerPage;
  const limit = itemsPerPage;

  const { data } = await axios.get<PokemonListRequest>(API, {
    params: {
      limit,
      offset,
    },
  });

  const { results } = data;

  return results;
};

export const getPokemonDetail = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url);

  return data;
};

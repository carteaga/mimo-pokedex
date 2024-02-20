import axios from "axios";
import { Pokemon, PokemonListRequest } from "../entities/Pokemon";

const API = "https://pokeapi.co/api/v2/pokemon";
const LIMIT_POKEMON_WITH_ANIMATION = 100;

export const getPokemons = async () => {
  const { data } = await axios.get<PokemonListRequest>(
    `${API}?limit=${LIMIT_POKEMON_WITH_ANIMATION}`
  );
  const { results } = data;

  return results;
};

export const getPokemonDetail = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url);

  return data;
};

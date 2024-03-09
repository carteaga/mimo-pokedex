import { PokemonResume } from "../../entities/Pokemon";
import { isEmpty } from "../../utils";

export const filterPokemonsResumenByName =
  (pokemonName: string) => (pokemon: PokemonResume) =>
    pokemon.name.includes(pokemonName.toLocaleLowerCase());

export const filterListPokemonByName = (
  pokemons: PokemonResume[],
  filterByName?: string
) =>
  isEmpty(filterByName)
    ? pokemons
    : pokemons.filter(filterPokemonsResumenByName(filterByName));

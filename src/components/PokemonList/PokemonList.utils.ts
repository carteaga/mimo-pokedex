import { PokemonResume } from "../../entities/Pokemon";

export const filterPokemonsResumenByName =
  (pokemonName: string) => (pokemon: PokemonResume) =>
    pokemon.name.includes(pokemonName.toLocaleLowerCase());

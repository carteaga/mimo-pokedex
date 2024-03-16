import { PokemonPreviewContainer } from "..";
import { PokemonResume } from "../../entities/Pokemon";

export type PokemonListProps = {
  pokemonResume: PokemonResume[];
  onPokemonClick?: (pokemonId: number) => void;
};

const PokemonList = (props: PokemonListProps) => {
  const { pokemonResume, onPokemonClick = () => undefined } = props;

  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {pokemonResume.map((pokemon) => (
        <PokemonPreviewContainer
          key={pokemon.url}
          url={pokemon.url}
          onPokemonClick={onPokemonClick}
        />
      ))}
    </section>
  );
};

export default PokemonList;

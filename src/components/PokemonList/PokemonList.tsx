import { PokemonPreviewContainer } from "..";
import { PokemonResume } from "../../entities/Pokemon";

type PokemonListProps = {
  pokemonResume: PokemonResume[];
};

const PokemonList = (props: PokemonListProps) => {
  const { pokemonResume } = props;

  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {pokemonResume.map((pokemon) => (
        <PokemonPreviewContainer key={pokemon.url} url={pokemon.url} />
      ))}
    </section>
  );
};

export default PokemonList;

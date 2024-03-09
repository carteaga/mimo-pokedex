import { colorByType } from "../../constants/pokemon";
import { Pokemon } from "../../entities/Pokemon";

type PokemonProps = {
  pokemon: Pokemon;
};

const PokemonPreview = (props: PokemonProps) => {
  const { pokemon } = props;

  return (
    <article className="text-center bg-white rounded-[30px] relative font-semibold capitalize pb-2 shadow-lg shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2">
      <header className="h-9">
        <img
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated"
          src={
            pokemon.sprites.versions?.["generation-v"]["black-white"]
              .front_default
          }
          alt=""
        />
      </header>
      <span className="text-sm text-slate-400">N {pokemon.id}</span>
      <h4>{pokemon.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemon.types.map((type) => (
          <li
            className={`${colorByType[type.type.name] ?? "bg-red-500"} p-1 rounded-md px-2 text-white`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonPreview;

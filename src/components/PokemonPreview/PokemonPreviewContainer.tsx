import { PokemonPreview } from ".";
import usePokemonDetail from "../hooks/usePokemonDetail/usePokemonDetail";
import { PokemonPreviewProps } from "./PokemonPreview";

type PokemonPreviewContainerProps = {
  url: string;
} & Omit<PokemonPreviewProps, "pokemon">;

const PokemonPreviewContainer = (props: PokemonPreviewContainerProps) => {
  const { url, ...pokemonPreviewProps } = props;
  const { data: pokemon } = usePokemonDetail(url);

  if (!pokemon) return null;

  return <PokemonPreview pokemon={pokemon} {...pokemonPreviewProps} />;
};

export default PokemonPreviewContainer;

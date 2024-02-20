import { PokemonPreview } from ".";
import usePokemonDetail from "../hooks/usePokemonDetail/usePokemonDetail";

type PokemonPreviewContainerProps = {
  url: string;
};

const PokemonPreviewContainer = (props: PokemonPreviewContainerProps) => {
  const { url } = props;
  const { data: pokemon } = usePokemonDetail(url);

  if (!pokemon) return null;

  return <PokemonPreview pokemon={pokemon} />;
};

export default PokemonPreviewContainer;

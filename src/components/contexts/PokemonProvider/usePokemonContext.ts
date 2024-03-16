import { useContext } from "react";
import PokemonContext from "./PokemonContext";

const usePokemonContext = () => useContext(PokemonContext);

export default usePokemonContext;

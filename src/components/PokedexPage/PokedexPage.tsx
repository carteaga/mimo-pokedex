import { IconSearch } from "@tabler/icons-react";
import PokemonListContainer from "../PokemonList/PokemonListContainer";

const PokedexPage = () => {
  return (
    <section className="p-4 py-5">
      <form>
        <div className="p-4 bg-white flex rounded-2xl text-lg">
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Search your Pokemon"
          />
          <button className="bg-red-500 p-2 rounded-xl shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
        <PokemonListContainer />
      </form>
    </section>
  );
};

export default PokedexPage;

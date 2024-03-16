import { Aside, PokedexPage } from "./components";
import { ModalPokemon } from "./components/ModalPokemon";
import usePokemonContext from "./components/contexts/PokemonProvider/usePokemonContext";

const PokemonApp = () => {
  const { showDetailPokemon, closePokemonDetail } = usePokemonContext();

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid gird-cols-1 lg:grid-cols-[1fr_350px] ">
        <PokedexPage />
        <Aside />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
        />
      </main>
    </section>
  );
};

export default PokemonApp;

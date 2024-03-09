import { Aside, PokedexPage } from "./components";

const PokemonApp = () => {
  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid gird-cols-1 lg:grid-cols-[1fr_350px] ">
        <PokedexPage />
        <Aside />
      </main>
    </section>
  );
};

export default PokemonApp;

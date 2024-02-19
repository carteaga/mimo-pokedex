import { Aside, PokemonList } from "./components";

function App() {
  return (
    <section>
      <main className="max-w-[1400px] mx-auto grid gird-cols-1 lg:grid-cols-[1fr_350px] h-screen font-outfit">
        <PokemonList />
        <Aside />
      </main>
    </section>
  );
}

export default App;

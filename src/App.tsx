import { QueryClient, QueryClientProvider } from "react-query";
import PokemonApp from "./PokemonApp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonApp />
    </QueryClientProvider>
  );
}

export default App;

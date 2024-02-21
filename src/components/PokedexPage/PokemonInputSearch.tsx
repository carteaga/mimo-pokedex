import { IconSearch } from "@tabler/icons-react";

type PokemonInputSearchProps = Pick<
  React.ComponentPropsWithoutRef<"input">,
  "onChange"
>;

const PokemonInputSearch = (props: PokemonInputSearchProps) => {
  const { onChange = () => undefined } = props;

  return (
    <div className="p-4 bg-white flex rounded-2xl text-lg">
      <input
        className="outline-none flex-1"
        type="text"
        placeholder="Search your Pokemon"
        onChange={onChange}
      />
      <button className="bg-red-500 p-2 rounded-xl shadow-red-500/50 hover:bg-red-400 transition-colors">
        <IconSearch color="white" stroke={3} />
      </button>
    </div>
  );
};

export default PokemonInputSearch;

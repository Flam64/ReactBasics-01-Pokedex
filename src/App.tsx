import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "mew",
	},
];

function App() {
	return (
		<div>
			<PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
		</div>
	);
}

export default App;

import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "charmander",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},

	{
		name: "squirtle",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},

	{
		name: "pikachu",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},

	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setpokemonIndex] = useState(0);

	const handleClickSuivant = () => {
		setpokemonIndex(pokemonIndex + 1);
	};

	const handleClickPecedent = () => {
		setpokemonIndex(pokemonIndex - 1);
	};

	return (
		<>
			<PokemonCard
				imgSrc={pokemonList[pokemonIndex].imgSrc}
				name={pokemonList[pokemonIndex].name}
			/>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handleClickPecedent}>
					Precedent
				</button>
			)}

			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleClickSuivant}>
					Suivant
				</button>
			)}
		</>
	);
}

export default App;

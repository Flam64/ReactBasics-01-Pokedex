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

export default function PokemonCard() {
	const pokemon = pokemonList[1];

	return (
		<>
			{pokemon.imgSrc ? (
				<figure>
					<img src={pokemon.imgSrc} alt={`Figure du pokemon ${pokemon.name}`} />
				</figure>
			) : (
				<h1>???</h1>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

type Pokemon = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};

export default function NavBar({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) {
	const handleClickSuivant = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	const handleClickPecedent = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
		<>
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

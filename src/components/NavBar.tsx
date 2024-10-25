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
	return (
		<>
			{pokemonList.map((avatar, index) => (
				<button
					type="button"
					key={avatar.name}
					onClick={() => setPokemonIndex(index)}
				>
					{avatar.name}
				</button>
			))}
		</>
	);
}

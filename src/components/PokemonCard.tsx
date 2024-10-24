export default function PokemonCard({ pokemon }) {
	const { name, imgSrc } = pokemon;

	return (
		<>
			{imgSrc ? (
				<figure>
					<img src={imgSrc} alt={`Figure du pokemon ${name}`} />
				</figure>
			) : (
				<h1>???</h1>
			)}
			<figcaption>{name}</figcaption>
		</>
	);
}

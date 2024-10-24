type pokemon = {
	name: string;
	imgSrc?: string;
};
export default function PokemonCard({ name, imgSrc }: pokemon) {
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

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Heading from "./heading/Heading";
import { ImageGrid } from "./pokemon/ImageGrid";
import { PokemonData } from "../src/pokemon/ImageGrid";
import { InfoPanel } from "./infopanel/Infopanel";
import useHttp from "./hooks/use-http";

let offset = 0;

function App() {	
	const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
	const [infoPanelData, setInfoPanelData] = useState<PokemonData[] | []>([]);

	const { isLoading, sendRequest } = useHttp();

	const fetchMoreData = async () => {
		const data: PokemonData = await sendRequest({
			url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
		});

		const pokemonArray = data.results as Array<PokemonData>;
		const individualPokemons = await Promise.all(
			pokemonArray.map(async (result: PokemonData) => {
				const pokemon = await sendRequest({
					url: `https://pokeapi.co/api/v2/pokemon/${result.name}`,
				});
				return { ...pokemon, uniqueID: uuidv4() };
			})
		);
		setPokemonData((prevPokemons) => [...prevPokemons, ...individualPokemons]);
		offset += 10;
	};

	const handleScroll = (event: Event) => {
		let target = event.target as Document;
		if (
			window.innerHeight + target.documentElement.scrollTop + 1 >=
			target.documentElement.scrollHeight
		) {
			fetchMoreData();
		}
	};

	useEffect(() => {
		fetchMoreData();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const receivedIdHandler = (id: string) => {
		const filteredData = pokemonData.filter((item) => item.uniqueID === id);
		setInfoPanelData(filteredData);
	};

	const filteredPanelData = infoPanelData?.map((data: PokemonData) => (
		<InfoPanel
			key={data.uniqueID}
			id={data.uniqueID}
			name={data.name}
			height={data!.height}
			weight={data.weight}
			abilities={data.abilities}
			forms={data.forms}
		/>
	));

	return (
		<>
			<Heading />
			{isLoading && <p>Loading Pokemon Data...............</p>}
			<ImageGrid pokemonData={pokemonData} onReceiveId={receivedIdHandler} />
			{filteredPanelData}
		</>
	);
}

export default App;

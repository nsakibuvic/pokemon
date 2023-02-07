import { useState } from "react";
import ImageWithText from "./ImageWithText";
import CardGrid from "../ui/CardGrid";
import styles from './ImageGrid.module.css'

export type PokemonData = {
	src?: string;
	alt?: string;
	name?: string;
	url?: string | undefined;
	id?: string;
	uniqueID?: string;
	sprites?: {
		back_default: string;
		front_shiny: string;
	};
	abilities?: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	forms?: {
		name: string;
		url: string;
	}[];
	height?: string;
	weight?: string;
	results?: PokemonData[];
	onReceiveId: (id: string) => void;
	clickedCard: boolean;
};

export type ImageGridProps = {
	pokemonData: PokemonData[];
	onReceiveId: (id: string) => void;
};

export const ImageGrid = (props: ImageGridProps) => {
	const [storedId, setStoredId] = useState("");
	const sendIdHandler = (id: string) => {
		props.onReceiveId(id!);
		setStoredId(id!);
	};
	const imagesFromBlock = props.pokemonData.map((item: PokemonData) => {
		return (
			<ImageWithText
				key={item.uniqueID}
				id={item.uniqueID}
				alt={item.name}
				name={item.name}
				src={item!.sprites!.front_shiny}
				onReceiveId={sendIdHandler}
				clickedCard={item.uniqueID === storedId}
			/>
		);
	});
	return <CardGrid className={styles.grid}>{imagesFromBlock}</CardGrid>;
};

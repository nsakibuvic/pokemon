import styles from "./ImageWithText.module.css";
import { PokemonData } from "./ImageGrid";
import { CapitalizeFirstLetter } from "../ui/CapitalizeFirstLetter";
import Card from "../ui/Card";

export default function ImageWithText(props: PokemonData) {
	const cardClickedHandler = () => {
		props.onReceiveId(props.id!);
	};
	const updatedCardClass = `${
		!props.clickedCard ? '' : styles.card_after
	}`;
	return (
		<Card className={updatedCardClass} onClick={cardClickedHandler}>
			<img src={props.src} alt={props.alt} />
			<div className={styles.card_title}>{CapitalizeFirstLetter(props.name!)}</div>
		</Card>
	);
}

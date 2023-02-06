import { useState } from "react";
import styles from "./ImageWithText.module.css";
import { PokemonData } from "./ImageGrid";

export default function ImageWithText(props: PokemonData) {
	const cardClickedHandler = () => {
		props.onReceiveId(props.id!);
	};
	const updatedCardClass = `${
		!props.clickedCard ? styles.card : `${styles.card} ${styles.card_after}`
	}`;
	return (
		<div className={updatedCardClass} onClick={cardClickedHandler}>
			<img src={props.src} alt={props.alt} />
			<div className={styles.card_title}>{props.name}</div>
		</div>
	);
}

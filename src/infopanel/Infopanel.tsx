import styles from "./Infopanel.module.css";
import { CapitalizeFirstLetter } from "../ui/CapitalizeFirstLetter";

type InfoPanelProps = {
	id?: string;
	name?: string;
	abilities?: {
		ability?: {
			name?: string;
			url?: string;
		};
	}[];
	forms?: {
		name: string;
		url: string;
	}[];
	height?: string;
	weight?: string;
};

export const InfoPanel = (props: InfoPanelProps) => {
	if (!props.id) {
		return <aside className={styles.panel}></aside>;
	}

	return (
		<aside className={styles.panel}>
			<h2 className={styles.heading}>Pokemon Info</h2>
			<dl>
				<dt className={styles.title}>ID:</dt>
				<dd className={styles.details}>{props.id}</dd>

				<dt className={styles.title}>Name:</dt>
				<dd className={styles.details}>{CapitalizeFirstLetter(props.name!)}</dd>

				<dt className={styles.title}>Height:</dt>
				<dd className={styles.details}>{props.height}</dd>

				<dt className={styles.title}>Weight:</dt>
				<dd className={styles.details}>{props.weight}</dd>

				<dt className={styles.title}>Abilities:</dt>
				<dd className={styles.details}>
					{props.abilities?.map((item) => (
						<ul key={item.ability?.name}>
							<li>{item.ability?.name}</li>
						</ul>
					))}
				</dd>
				<dt className={styles.title}>Forms:</dt>
				<dd className={styles.details}>
					{props.forms?.map((item) => (
						<ul key={item.name}>
							<li>{item?.name}</li>
						</ul>
					))}
				</dd>
			</dl>
		</aside>
	);
};

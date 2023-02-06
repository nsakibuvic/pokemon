import styles from './Infopanel.module.css'

type InfoPanelProps = {
	id?: string;
    name?: string
	abilities?: [
		{
			ability?: {
				name?: string;
				url?: string;
			};
		}
	];
	height?: string;
};

export const InfoPanel = (props: InfoPanelProps) => {	
	if (!props.id) {
		return <aside className={styles.panel}></aside>;
	}

	return (
		<aside className={styles.panel}>
			<h2 className={styles.heading}>Pokemon info</h2>
			<dl>
				<dt className={styles.title}>ID:</dt>
				<dd className={styles.details}>{props.id}</dd>

				<dt className={styles.title}>Name:</dt>
				<dd className={styles.details}>{props.name}</dd>

				<dt className={styles.title}>Height:</dt>
				<dd className={styles.details}>{props.height}</dd>

				<dt className={styles.title}>Abilities:</dt>
				<dd className={styles.details}>{props.abilities?.map(item => <ul>
                    <li>{item.ability?.name}</li>
                </ul>)}</dd>
			</dl>
		</aside>
	);
};

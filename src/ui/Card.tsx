import styles from "./Card.module.css";

export type UIElementProps = {
	className?: Object;
	onClick?: () => void;
	children?: React.ReactNode
};

export default function Card(props: UIElementProps) {	
	return (
		<div
			className={`${styles.card} ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
}

import { UIElementProps } from "./Card"
import styles from './CardGrid.module.css'


export default function CardGrid(props: UIElementProps) {
    return (
        <div
        className={`${styles.imageGrid} ${props.className}`}
        onClick={props.onClick}
    >
        {props.children}
    </div>
    )
}

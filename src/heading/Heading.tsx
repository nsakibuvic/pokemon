import styles from "./Heading.module.css";
import logo from "./anime.png";

export default function Heading() {
	return (
        <>
		<div className={styles.heading}>
			<img src={logo} className={styles.logo} alt="Logo" />
			<h1 className={styles.title}>Pokemon Details -- Click to Open the Info-Panel</h1>			
		</div>          
        </>
	);
}

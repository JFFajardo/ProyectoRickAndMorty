import styles from "./Error.module.css";
import billy from '../../assets/img/share-Billy.png'

export default function Error () {
    return(
        <div className={styles.div}>
        <h1>404</h1>
        <h2>Pagina No Encontrada!!</h2> 
        <img className={styles.img} src={billy} alt="Billy"/>
        <h3>Cali - Colombia</h3>
        </div>
    )
}   
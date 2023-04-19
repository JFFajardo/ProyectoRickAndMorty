import styles from "./Error.module.css";
import rym2 from '../../assets/img/rym2.png'


export default function Error () {
    return(
        <div className={styles.div}>
        <h1>Error 404!!!</h1>
        <h2>Web Not Found!!</h2> 
        <img className={styles.img} src={rym2} alt="imagenNotFound"/>
        <h3>Cali - Colombia</h3>
        </div>
    )
}   
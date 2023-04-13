import styles from "./About.module.css";
import billy from '../../assets/img/billy.jpg'

export default function About () {
    return(
        <div className={styles.div}>
            <h1>Created by: Johan Fajardo</h1>
            <h2>Ingeniero Electrónico</h2> 
            <img className={styles.img} src={billy} alt="Billy"/>
            <h3>Cali - Colombia</h3>
        </div>
    )
}
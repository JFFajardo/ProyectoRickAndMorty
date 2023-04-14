import styles from "./About.module.css";
import johan from '../../assets/img/johan.jpg'

export default function About () {
    return(
        <div className={styles.div}>
            <h1>Created by: Johan Fajardo</h1>
            <h2>Ingeniero Electronico</h2> 
            <h2>FT 37-A</h2> 
            <img className={styles.img} src={johan} alt="Billy"/>
            <h3>Cali - Colombia</h3>
        </div>
    )
}
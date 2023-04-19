import styles from "./About.module.css";
import johan from '../../assets/img/johan.jpg'
import { NavLink } from "react-router-dom";

export default function About () {
    return(
        <div className={styles.div}>
            <h1>Created by: Johan Fajardo</h1>
            <h2>Ingeniero Electronico</h2> 
            <h2>FT 37-A</h2> 
            <img className={styles.img} src={johan} alt="Billy"/>
            <div className={styles.div_button}>                
                <a className= {styles.button_git} href="https://github.com/JFFajardo"></a>
                <a className= {styles.button_link}href='https://www.linkedin.com/in/johan-arciniegas-fajardo-81500511a'></a>
            </div>         
            <h3>Cali - Colombia</h3>
        </div>
    )
}
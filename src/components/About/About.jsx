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
            <div className= {styles.button_git}>
                <NavLink  to='https://github.com/JFFajardo'></NavLink>               
            </div>
            <div className= {styles.button_link}>
                <NavLink  to='https://www.linkedin.com/in/johan-arciniegas-fajardo-81500511a'></NavLink>               
            </div>
            </div>
          
            <h3>Cali - Colombia</h3>
        </div>
    )
}
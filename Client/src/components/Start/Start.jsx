import styles from "./Start.module.css";
import { NavLink } from "react-router-dom";
import rymstart from '../../assets/img/rymstart.png'

export default function Start () {
    
    return(          
        <div className={styles.div}>
            <img className={styles.img} src={rymstart} alt="Inicio" />
            <h1>WELCOME</h1>
            <h2>RICK AND MORTY APP</h2> 
                <div > 
                    <div className= {styles.button}>
                    <NavLink  to='/start/login'>
                    <span className={styles.navLink}>ENTER</span></NavLink>          
                    <div className={styles.dot}></div>
                    </div>
                </div>     
        </div>
    )
}   
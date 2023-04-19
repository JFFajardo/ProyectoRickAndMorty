import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'adecaf1bb490.fef7146b957ae87523bb'

export default function Detail() {
   let {id} = useParams();

   let [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      }); return setCharacter({});
   }, [id]);

   return(         
      <div className={styles.container}>
         <div className={styles.card}>            
            <div className={styles.details}>
               <h2 >Details</h2>
               <h2>{character?.name}</h2>
               <h2>Status → {character?.status}</h2>
               <h2>Specie → {character?.species}</h2>
               <h2>Gender → {character?.gender}</h2>
               <h2>Origin → {character?.origin?.name}</h2>
            </div>
         </div>                  
         <div className={styles.cardImg}>
            <img className={styles.img} src={character?.image} alt=''/>
            <p>{character?.id}</p>
         </div>
      </div>  
   )                
}



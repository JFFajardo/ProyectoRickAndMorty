import styles from './Searchbar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   let [id, setId]= useState('')

   const handleChange = (event) => {
      setId(id= event.target.value)      
   }  
   
   return (
      <div className={styles.divSearch}>
         <input 
         className={styles.input} 
         type='search' 
         placeholder='Enter Id' 
         value={id} 
         onChange={handleChange}/>
         <div>
            <button className={styles.button} onClick={() =>{onSearch(id); setId('')}}>Add To List</button>
         </div>
      </div>
   );
}
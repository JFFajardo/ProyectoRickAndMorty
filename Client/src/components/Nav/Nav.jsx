import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from './Nav.module.css';
// import { useState } from 'react';
import { NavLink } from "react-router-dom";


export default function Nav({onSearch, setAccess}, ) {

  const handleLogOut = () => {
    setAccess(false);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.div}>
          <NavLink to='/start/home' >
            <button className={styles.button} >Home</button>
          </NavLink>
          <NavLink to='/favorites'>     
            <button className={styles.button}>Favorites</button>
          </NavLink>          
      </div>
      <div className={styles.div}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.button} onClick={() => onSearch(Math.floor(Math.random()*1000)
        )}>Random Character</button>
      </div>
      <div className={styles.div}>
        <NavLink to='start/about'>  
        <button className={styles.button}>About</button>
        </NavLink>  
        <button className={styles.button} onClick={handleLogOut}>LOGOUT</button>  
      </div>         
    </nav>     
  );
}



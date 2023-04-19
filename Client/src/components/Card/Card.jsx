import styles from './Card.module.css'
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect} from 'react';

const Card = (props) => {
   
   const [isFav, setIsFav] = useState (false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      } else if(!isFav) {
         setIsFav(true)
         props.addFav(props)
      }
   }   

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);
   
   return (
      <div className= {styles.container}>
         <div className={styles.div}>
            <button className={styles.button_fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'} </button>
            <p className={styles.navLink}>{props.id}</p>
            <button className={styles.button} onClick= {() => {props.onClose(props.id)}}>X</button>
         </div>
         <div className={styles.div}>
            <NavLink className={styles.navLink} to={`/detail/${props.id}`}>
            <p>Name: {props.name}</p>
            </NavLink>
         </div>
         <img className={styles.cardImg} src={props.image} alt=''/>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }   
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

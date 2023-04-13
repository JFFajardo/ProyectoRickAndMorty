import styles from "../Favorites/Favorites.module.css"
import { connect } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = ({myFavorites, removeFav}) => {

   const [aux, setAux] = useState (false)

   const dispatch = useDispatch()

   const handleOrder = (event) =>{
      dispatch(orderCards(event.target.value));
      setAux(!aux)
   }

   const handleFilter = (event) =>{      
      dispatch(filterCards(event.target.value))
   }

   return (
      <div>
         <div className={styles.box}> 
            <select  name="" id="" onChange={handleOrder}>
               <option value= 'A'>Ascendente</option>
               <option value= 'D'>Descendente</option>
            </select>
           
            <select name="" id="" onChange={handleFilter}>
               <option value= 'All'>All</option>
               <option value= 'Male'>Male</option>
               <option value= 'Female'>Female</option>
               <option value= 'Genderless'>Genderless</option>
               <option value= 'unknown'>Unknown</option>
            </select>
            
         </div>
         <div className={styles.listItem}>
         {myFavorites.map ((props) => {
            return (
                <Card 
                   key={props.id}
                   id={props.id}
                   name={props.name}
                   status={props.status}
                   species={props.species}
                   gender={props.gender}
                   origin={props.origin.name}
                   image={props.image}
                   onClose={() => {removeFav(props.id)}}
                />
            )
         })}
         </div>       
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFav: (id) => {dispatch(removeFav(id))}
   }   
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Favorites);
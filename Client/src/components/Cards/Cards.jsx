import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   
   return (
      <div className={styles.listItem}> 
         {
         characters.map((props) => {
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
                  onClose={onClose}
               />
            )
         })}
      </div>
   );
} 
   



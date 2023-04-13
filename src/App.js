import './App.css';
// import Card from './components/Card/Card';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'adecaf1bb490.fef7146b957ae87523bb'


function App() {

   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const email = 'billyberto@gmail.com';
   const password = 'gatoloco89';

   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }     

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);

   function onSearch(id) {
      for (const character of characters){
         if(character.id === parseInt(id)) return window.alert('¡Personaje ya agregado!');
      }
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {window.alert('¡No hay personajes con este ID!')}
      }).catch(()=>window.alert('¡No hay personajes con este ID!'))
   }

   const onClose =(id) => {
      setCharacters(characters.filter(character => (id)!== character.id))
   }

   return (        
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes>            
            <Route path='/home' element={<Cards onClose={onClose}characters={characters}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='*' element={<Error/>}/> 
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}
export default App;

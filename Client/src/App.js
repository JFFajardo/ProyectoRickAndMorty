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
import Start from './components/Start/Start';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';


const URL_BASE = 'http://localhost:3001/rickandmorty/character'
// const API_KEY = 'adecaf1bb490.fef7146b957ae87523bb'
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {

   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   // const email = 'billy@gmail.com';
   // const password = 'gato123';

   const login = async (userData) => {
      try{
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/start/home');
         !access && alert('No se encontró registro')
      }
      catch(error){
         console.log('Error de Login');
      }
   }

   const detail = (pathname) =>{
      const arrPathname = pathname.split('/')
      return arrPathname.includes('detail')
   }

   useEffect(() => {
      (!access && 
      (pathname === '/start/home' || pathname === '/favorites' || pathname === '/start/about' || detail(pathname)) &&
       navigate('/start'))

       return () => {
         pathname === '/start' && setCharacters([])
       }
   }, [access, navigate, pathname]);

   const onSearch = async (id) => {
      for (const character of characters){
         if(character.id === parseInt(id)) return alert('¡Personaje ya agregado!');
      }
      try {
         const {data} = await axios(`${URL_BASE}/${id}`)
            if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      }
      catch(error){
         alert('¡No hay personajes con este ID!')
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => (id)!== character.id))
   }

   return (        
      <div className='App'>
         {(pathname === '/start/home' ||  pathname === '/start/about' || pathname === '/favorites' || detail(pathname)) && <Nav onSearch={onSearch} setAccess={setAccess}/>}
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes>            
            <Route path='/start/home' element={<Cards onClose={onClose}characters={characters}/>}/>
            <Route path='/start/about' element={<About/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route exact path="/" element={<Start/>} />
            <Route path='/start' element={<Start/>}/>
            <Route path='/start/login' element={<Form login={login}/>} />
            <Route path='*' element={<Error/>}/> 
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}
export default App;

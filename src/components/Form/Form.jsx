import { useState } from 'react'
import validate from './validation'
import styles from './Form.module.css'
import rym from '../../assets/img/rym.jpg'

export default function Form ({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors (validate({
            ...userData, 
            [event.target.name]: event.target.value
        }))
    }    

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return(                
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div><img className={styles.img} src={rym} alt="RickMortyIntro"/></div>
                <div className={styles.input_container}>                           
                    <input
                    name='email' 
                    type='email' 
                    value={userData.email} 
                    onChange={handleChange}/>
                    <label htmlFor='email'> Email: </label> 
                    <p>{errors.email}</p>                    
                </div>
                <div className={styles.input_container}>            
                    <input 
                    name='password' 
                    type= 'password'  
                    value={userData.password} 
                    onChange={handleChange}/>
                    <label htmlFor='password'> Password: </label>
                    <p>{errors.password}</p>
                </div>
                <div>
                    <button 
                    disabled={!userData.email || !userData.password || errors.email || errors.password} 
                    className={styles.button} 
                    onClick={handleSubmit}>LOGIN</button>
                </div>
            </form>
        </div>
    )
}
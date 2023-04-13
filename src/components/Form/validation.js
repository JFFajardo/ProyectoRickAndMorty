

export default function validate (userData) {
    const error={}

        if(!userData.email) {error.email= 'Ingresa tu email'}
        else if(userData.email.length>35) {error.email= 'Email No debe superar los 35 caracteres'}     
        else if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(userData.email)) {error.email='Email no es válido'}
        else error.email= ''
  
        if(userData.password.length < 6 || userData.password.length > 10) {error.password= 'Longitud inválida'}
        else if (!/\d/.test(userData.password)) {error.password= 'Debe contener al menos un número'}
        else error.password= ''

    return error
  }
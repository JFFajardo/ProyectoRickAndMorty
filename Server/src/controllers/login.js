const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    res.status(400).send("Completa los datos");
  }

  try {
    const userFind = await User.findOne({
      where: {email},
    });

    if(!userFind){
        return res.status(400).send("Usuario no registrado")
    } else if(userFind.password === password){
        return res.status(201).json({access:true})
    } else{
        return res.status(403).send("Contraseña incorrecta")
    }
}
     catch (error) {
    res.status(500).json(error.message);
    }
}

module.exports = {login};
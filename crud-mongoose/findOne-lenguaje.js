require('../connection')
const Lenguaje = require('../models/lenguajes')

const getLenguaje = async()=>{

      try{
        const query =  await  Lenguaje.findOne({descripcion:'me gusta para aplicaciones web'})
        return query
      }catch(e){
          console.log(e)
      }
}

getLenguaje()
    .then(query=>console.log(query))
    .catch(e=>console.log(e))
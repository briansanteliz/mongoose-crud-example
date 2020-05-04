require("../connection");
const Lenguajes = require("../models/lenguajes");

const crerLenguaje = async () => {
  const lenguaje = new Lenguajes({
    nombre:'next', //unico
    descripcion:'me gusta para aplicaciones web'
  });
   const salvado =   await lenguaje.save()
   return salvado
};

crerLenguaje()
        .then(salvado=>console.log(salvado))
        .catch(err=>console.log(err))
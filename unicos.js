require("./connection");
const Usuario = require("./models/Users");

const createdUser = async () => {
  const userOne = new Usuario({
    nombre: "maria",
    edad:22,
    password:'123455', 
    nickname:'san', //unico
  });

   const nuevo= await userOne.save()
   return nuevo
};

const Main = createdUser();
Main
  .then(nuevo=>console.log(nuevo))
  .catch(e=>console.log(e))
require("./connection");
const Usuario = require("./models/Users");

const createdUser = async () => {
  const userOne = new Usuario({
    nombre: "Joe con NIckname corregido",
    edad:20,
    password:'111', 
    nickname:'mongo', //unico
  });

   await userOne.save()
};

const Main = createdUser();
Main;

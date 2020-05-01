//requiriendo el modelo y la conexión.
require("../connection");
const Productos = require("../models/Products");

//listando todos los productos.
const main = async() =>{
    const query = await Productos.find();
    console.log(query)
}

const Main = main();
Main
    
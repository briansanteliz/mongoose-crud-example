//requiriendo el modelo y la conexión.
require("./connection");
const Productos = require("./models/Products");

//creando una función asincrona para guardar.
const main = async () => {
  try {
    const newProduct = new Productos({
      nombre: "Xbox One",
      descripcion: "Consola VIdeojuego",
      precio: 150,
    });
    //creo el producto y lo guardo en una constante.
    const productSave = await newProduct.save();
     return productSave //retorno el producto y se lo envió a la promesa.
  } catch (e) {
    throw new Error(e);
  }
};
const Main = main();
Main
    .then(productSave=>console.log(productSave))
    .catch(error=>console.log(error));
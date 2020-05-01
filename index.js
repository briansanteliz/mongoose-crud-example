require('./connection')

const Productos = require('./models/Products')

const newProducto = new Productos({
    nombre: 'laptop',
    descripcion:'Laptop Gaming',
    precio:99
})

// newProducto.save()
console.log(newProducto);
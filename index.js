const express = require('express');
const morgan = require('morgan');
const app = express();
let {products, person} = require("./products");


app.use(morgan('tiny'));
app.use(express.json());
// Generar nueva peticion post 
app.post('/api/products', (req, res) => {
    const randomNumber = () => Math.floor(Math.random()* 1000) + 1
    req.body.id = randomNumber();
    if (!req.body.title || !req.body.price) return res.status(404).json({error: "missing title or price"});
    const {title} = req.body
    const repeatedTitle = products.find((product) => product.title === title && product);
    if (repeatedTitle) return res.status(400).json({error: "Must be unique"});
    products.push(req.body);
    res.status(200).json(req.body);
});




//Listar los productos
app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});
//Buscar por id un producto
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find((product) => product.id === +id && product);
    if (!product) return res.status(404).json({error: "The product doesn't exist"});
    res.status(200).json(product);
});

// Eliminar una entrada
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find((product) => product.id === parseInt(id) && product);
    products = products.filter((element)=> element.id !== product.id);
    res.status(200).send(`deleted product ${product.id}`);
});

//Informacion de productos
app.get('/info', (req, res) => {
    const date = new Date();
    res.status(200).send(`<p>Our store has info for ${products.length} products</p> \n <p>${date}</p>`);
});

//Listar las personas
app.get('/about', (req, res) => {
    res.status(200).json(person);
});
app.listen(8000, () => console.log('Listening on port 8000'));

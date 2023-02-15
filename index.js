const express = require('express');
const app = express();
const {products, person} = require("./products")

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find((product) => product.id === +id && product);
    if (!product) return res.status(404).send("The product doesn't exist");
    res.status(200).json(product);
});
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find((product) => product.id === +id && product);
    res.send(`deleted product ${product.id}`);
});

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`<p>Our store has info for ${products.length} products</p> \n <p>${date}</p>`);
});

app.get('/about', (req, res) => {
    res.json(person);
});
app.listen(8000, () => console.log('Listening on port 8000'));
const express = require('express');
const app = express();
const {products, person} = require("./products")

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`<p>Our store has info for ${products.length} products</p> \n <p>${date}</p>`);
});

app.get('/about', (req, res) => {
    res.json(person);
});
app.listen(8080, () => console.log('Listening on port 8080'));
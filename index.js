const express = require('express');
const app = express();
const {products, person} = require("./products")

app.get('/api/products', (req, res) => {
    res.json(products);
});
/*
for (let i = 0; i < products.length; i++) {
    const element = products[i].id;
    app.get(`/api/products/${element}`, (req, res) => {
        res.json(products[i])
    })
    
}*/

app.get("/api/products/:ïd", (req, res) => {
    const productId = req.params.id
    console.log("Peticion por id", productId)
});


app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`<p>Our store has info for ${products.length} products</p> \n <p>${date}</p>`);
});

app.get('/about', (req, res) => {
    res.json(person);
});
app.listen(8000, () => console.log('Listening on port 8000'));
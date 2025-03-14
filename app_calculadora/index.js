const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res) => {
    res.send('Eae');
})

const port = 8080;
app.listen(port , () => {
    console.log(`App rodando na porta: ${port}`);
});


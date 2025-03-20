const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res) => {
    res.send('Eae');
})
app.get('/ola/:nome', (req, res) => {
    res.send(`Ola ${req.params.nome}`);
})

app.get('/somar/:a/:b', (req, res) => {
    var soma = calc.somar(req.params.a , req.params.b)
    res.send(`${req.params.a} + ${req.params.b} = ${soma} `);
})
app.get('/subtrair/:a/:b', (req, res) => {
    var sub = calc.subtrair(req.params.a , req.params.b)
    res.send(`${req.params.a} - ${req.params.b} = ${sub} `);
})
app.get('/multiplicar/:a/:b', (req, res) => {
    var multi = calc.multiplicar(req.params.a , req.params.b)
    res.send(`${req.params.a} * ${req.params.b} = ${multi} `);
})
app.get('/dividir/:a/:b', (req, res) => {
    var div = calc.dividir(req.params.a , req.params.b)
    res.send(`${req.params.a} / ${req.params.b} = ${div} `);
})


const port = 8080;
app.listen(port , () => {
    console.log(`App rodando na porta: ${port}`);
});


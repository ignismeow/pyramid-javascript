const express = require('express');

const app = express();

app.get('/add', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) + parseInt(b);
    res.json({
        result
    })
})

app.get('/subtract', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) - parseInt(b);
    res.send(result.toString());
})

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) * parseInt(b);
    res.send(result.toString());
})

app.get('/divide', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) / parseInt(b);
    res.send(result.toString());
})

app.listen(3000,() => {
    console.log('Server is running on port 3000')
})

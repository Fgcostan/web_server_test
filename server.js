//require
const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//server
app.get('/', (req, res) => {
    //res.send(salida); //ya lo convierte a JSON
    res.render('home', {
        nombre: 'Francisco Costanza',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});
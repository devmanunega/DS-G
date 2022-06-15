/**
 * Dashboard G
 * Version: 1.0.0
 *
 * autor: Manuel Negrete Galvan
 */

// Elementos base
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const puerto = process.env.PORT || 3000;

// App
const app = express();

// Configuracion del motor de plantillas
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Configurando directorio public
app.use(express.static(path.join(__dirname, 'public')))

// Configurando el enrutador
const router = require('./routes/router')
app.use(router.routes)

// Levantando servidor
app.listen(puerto, () => {
    console.log('Escuchando en el puerto', puerto);
});

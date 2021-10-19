const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
const cors = require('cors');

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );
//me genera un error
//app.use('/api/products', require('./routes/products'));

//escuchar peticiones
app.listen(  process.env.PORT , () => {
    console.log(`Servidor corriedo en puerto ${ process.env.PORT }`);
});
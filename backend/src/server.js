const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const routesProduct = require('./routes/routesProduct');

const app = express();
const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;

app.use(express.json());

app.use('/api/products', routesProduct);

app.get('/',(req, res) => {
    res.send('Bienvenidos a la API de ChessStore')
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

  
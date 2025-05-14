
const express = require('express');
const app     = express();  
const port    = 3001;

// Middlewares de App
app.use(express.json());

// Routes
const equiposRouter = require('./routes/equipos.route.js');
const jugadoresRouter = require('./routes/jugadores.route.js');
const authRouter = require('./routes/auth.route.js');

// Aplicacion de rutas
app.use('/app/auth', authRouter(express));
app.use('/v1/equipo', equiposRouter(express));
app.use('/v1/jugador', jugadoresRouter(express));

// Listening
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
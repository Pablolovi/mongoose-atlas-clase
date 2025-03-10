require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const userRoutes = require('./routes/users'); // Cambiamos 'routes' por 'userRoutes'

app.use(express.json());

app.use('/users', userRoutes); // Usamos '/users' como prefijo para las rutas de usuario

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

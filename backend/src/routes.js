const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

// Rota para criar uma seção LOGIN
routes.post('/sessions', SessionController.create);

// Rotas para ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rotas para trazer incidentes especificos de uma ONG
routes.get('/profile', ProfileController.index);

// Rotas para Incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
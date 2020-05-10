const knex = require('knex'); // importanto o knex
const configuration = require('../../knexfile'); //importando as conf do bd que estao no nextfile

const connection = knex(configuration.development); // criando nossa conexão

module.exports = connection;


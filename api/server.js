const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

configureMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;
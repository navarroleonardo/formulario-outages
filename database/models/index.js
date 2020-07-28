const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tecnico = require('./Tecnico');
const Estado = require('./Estado');
const Cidade = require('./Cidade');
const Headend = require('./Headend');
const Distrito = require('./Distrito');
const Node = require('./Node');
const Alteracao = require('./Alteracao');
const Fechamento = require('./Fechamento');
const Solucao = require('./Solucao');

const connection = new Sequelize(dbConfig);

Tecnico.init(connection);
Estado.init(connection);
Cidade.init(connection);
Headend.init(connection);
Distrito.init(connection);
Node.init(connection);
Alteracao.init(connection);
Fechamento.init(connection);
Solucao.init(connection);

Tecnico.associate(connection.models);
Estado.associate(connection.models);
Cidade.associate(connection.models);
Headend.associate(connection.models);
Distrito.associate(connection.models);
Node.associate(connection.models);
Alteracao.associate(connection.models);
Fechamento.associate(connection.models);
Solucao.associate(connection.models);

module.exports = connection;
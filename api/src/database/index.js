const  Sequelize  =  require('sequelize')
const  dbConfig  =  require('../config/database')

const  Paciente  =  require('../models/paciente')
const  Medico  =  require('../models/medico')
const  Receita  =  require('../models/receita')

const  connection  =  new  Sequelize(dbConfig);

Paciente.init(connection);
Medico.init(connection);
Receita.init(connection);

module.exports  =  connection;
const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
    static init(sequelize) {
        super.init({ nome: DataTypes.STRING, especialidade: DataTypes.STRING }, { sequelize });
    }
}

module.exports = Medico;
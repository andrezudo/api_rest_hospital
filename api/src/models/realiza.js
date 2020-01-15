const { Model, DataTypes } = require("sequelize");
class Realiza extends Model {
    static init(sequelize) {
        super.init({
            data_consulta: DataTypes.DATE,
            id_paciente: DataTypes.INTEGER,
            id_medico: DataTypes.INTEGER,
            id_receita: DataTypes.INTEGER,


        }, { sequelize });
    }
    static associate(models) {
        this.belongsTo(models.Paciente, {
                foreignKey: "id_paciente",
                as: "possuiPaciente"
            }) //se der erro separar essa função
        this.belongsTo(models.Medico, {
            foreignKey: "id_medico",
            as: "possuiMedico"
        })
        this.belongsTo(models.Receita, {
            foreignKey: "id_receita",
            as: "possuiReceita"
        })


    }
}
module.exports = Realiza;
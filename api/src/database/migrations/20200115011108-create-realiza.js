"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("realiza", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_paciente: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "pacientes", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            id_medico: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "medicos", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            id_receita: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "receita", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            data_consulta: {
                type: Sequelize.DATE,
                allowNull: false
            },

            created_at: { type: Sequelize.DATE, allowNull: false },
            updated_at: { type: Sequelize.DATE, allowNull: false }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("realiza");
    }
};
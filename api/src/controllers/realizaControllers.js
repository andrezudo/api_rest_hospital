const Realiza = require("../models/realiza");
//const Paciente = require("../models/paciente");
//const Medico = require("../models/medico");
//const Receita = require("../models/receita");

module.exports = {
    async criarRealiza(req, res) {
        const { data_consulta, id_paciente, id_medico, id_receita } = req.body;

        const realiza = await Realiza.create({
            data_consulta,
            id_paciente,
            id_medico,
            id_receita
        });

        return res.json(realiza);




    },
    async listarRealiza(req, res) {
        const realiza = await Realiza.findAll()
        return res.json(realiza)
    },

    async listarRealizaId(req, res) {
        const { id_realiza } = req.params

        const realiza = await Realiza.findByPk(id_realiza)

        if (!realiza) {
            return res.status(400).json({ error: 'Realiza não encontrado!' })
        }

        return res.json(realiza);
    },



};
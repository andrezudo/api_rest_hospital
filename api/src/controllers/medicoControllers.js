const  Medico  =  require('../models/medico')

module.exports = {
    async criarMedico(req, res) {
        const { nome, especialidade } = req.body;
        const medico = await Medico.create({ nome, especialidade });

        return res.json(medico);
    },
    async listarMedico(req, res) {
        const medico = await Medico.findAll();
        return res.json(medico);
    }
};
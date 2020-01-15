const  Receita  =  require('../models/receita')

module.exports = {
    async criarReceita(req, res) {
        const { exame } = req.body;
        const receita = await Receita.create({ exame });

        return res.json(receita);
    },
    async listarReceita(req, res) {
        const receita = await Receita.findAll();
        return res.json(receita);
    }
};
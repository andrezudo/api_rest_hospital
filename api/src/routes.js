const  express  =  require('express')
const  pacienteController  =  require('./controllers/pacienteControllers')
const  medicoController  =  require('./controllers/medicoControllers')
const  receitaController  =  require('./controllers/receitaControllers')

const  routes  =  express.Router();

routes.get('/',   (req, res)  => {    
    return  res.json({ hello:   "Olá" })
})

routes.post('/paciente',  pacienteController.criarPaciente);
routes.get('/paciente',  pacienteController.listarPaciente);

routes.post('/medico',  medicoController.criarMedico);
routes.get('/medico',  medicoController.listarMedico);

routes.get('/receita',  receitaController.listarReceita);
routes.post('/receita',  receitaController.criarReceita);


module.exports  =  routes;
const  { Model,  DataTypes }  =  require('sequelize');

class  Receita  extends  Model {    
    static  init(sequelize) {         super.init({             exame:  DataTypes.STRING,          },    {             sequelize         })     }
}

module.exports  =  Receita;
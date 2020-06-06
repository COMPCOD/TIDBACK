const db = require ('../db')
const Receita = db.sequelize.define('receita',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  Nome_destinatario:{
    type: db.Sequelize.STRING
  },
  Nome_origem:{
    type: db.Sequelize.STRING
  },
  Valor:{
    type: db.Sequelize.INTEGER
  },
  mes:{
    type: db.Sequelize.INTEGER
  }
})

//Receita.sync({force:true});

module.exports = Receita

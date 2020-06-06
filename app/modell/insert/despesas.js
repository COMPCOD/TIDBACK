const db = require ('../db')
const Despesas = db.sequelize.define('despesas',{
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

//Despesas.sync({force:true});

module.exports = Despesas

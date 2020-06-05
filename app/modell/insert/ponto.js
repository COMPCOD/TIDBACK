const db = require ('../db')
const Ponto = db.sequelize.define('ponto',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  Id_associado:{
    type: db.Sequelize.INTEGER
  }
})

//Ponto.sync({force:true});

module.exports = Ponto

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken')
const User = require('../../app/modell/insert/Cadastro')
const authConfig = require('../../app/config/auth')
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())



//Rota de Autenticação Inicio//

router.post('/autentica', async(req, res)=>{
  const {email, senha} = req.body;
  console.log(req.body)
  const user = await User.findOne({email})
  console.log(user)
 if(email != user.email)
   return res.status(400).send({erro:'Usuario nao encontrado'})
 if(!await bcrypt.compare(senha, user.senha))
  return res.status(400).send({erro:'Senha Invalida'})
  const token = jwt.sign({ id: user.id}, authConfig.secret, {
    expiresIn: 86400,
  })
  user.senha = undefined
  user.nome_da_mae = undefined
  user.nome_do_pai = undefined
  user.d_nascimento = undefined
  user.rg_user = undefined
  user.cpf_user = undefined
  const cargos =user.cargo

  res.json({ user, token, cargos});
})

//Rota de Autenticação Fim//

module.exports = router

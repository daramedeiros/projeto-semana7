const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const tarefas = require('./routes')




//exportando um modulo
module.exports = app
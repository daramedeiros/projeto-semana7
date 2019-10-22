const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const tarefas = require('./routes/tarefas')


app.use('/', index)
app.use('/tarefas', tarefas)

//exportando um modulo
module.exports = app
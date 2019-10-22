const tarefas = require("../model/listaDeTarefas.json")

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    console.log(tarefa)

    res.status(200).send(tarefa)

}
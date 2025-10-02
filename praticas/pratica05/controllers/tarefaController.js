const tarefaModel = require("../models/tarefaModel");

function listar(req, res) {
  const resultado = tarefaModel.listar();
  return res.json(resultado);
}

function buscarPeloId(req, res) {
  const { tarefaId } = req.params;
  const resultado = tarefaModel.buscarPeloId(tarefaId);

  if (!resultado) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }

  return res.json(resultado);
}

function criar(req, res) {
  const novaTarefa = req.body;
  const resultado = tarefaModel.criar(novaTarefa);
  return res.status(201).json(resultado);
}

function atualizar(req, res) {
  const { tarefaId } = req.params;
  const dados = req.body;

  const resultado = tarefaModel.atualizar({ id: tarefaId, ...dados });

  if (!resultado) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }

  return res.json(resultado);
}

function remover(req, res) {
  const { tarefaId } = req.params;
  const resultado = tarefaModel.remover(tarefaId);

  if (!resultado) {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }

  return res.status(204).send();
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };

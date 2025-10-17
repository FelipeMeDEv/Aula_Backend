const Tarefa = require("../models/tarefasModel");

async function criar(req, res) {
  const tarefaEncontrada = await Tarefa.create({
    nome: req.body.nome,
    concluida: false,
  });
  return res.status(201).json({
    id: tarefaEncontrada._id,
    nome: tarefaEncontrada.nome,
    concluida: tarefaEncontrada.concluida,
  });
}

async function listar(req, res) {
  const tarefas = await Tarefa.find({});

  return res.json(tarefas);
}

async function buscar(req, res, next) {
  const { id } = req.params;
  const tarefaEncontrada = await Tarefa.findOne({ _id: id });
  if (tarefaEncontrada) {
    req.tarefa = {
      id: tarefaEncontrada._id,
      nome: tarefaEncontrada.nome,
      concluida: tarefaEncontrada.concluida,
    };
    return next();
  }
  return res.status(404).json({msg: "Tarefa não encontrada"});
}

function exibir(req, res) {
  return res.json({ id: 1 });
}

async function atualizar(req, res) {
  const { id } = req.params;
  const tarefaEncontrada = await Tarefa.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  return res.json({
    id: tarefaEncontrada._id,
    nome: tarefaEncontrada.nome,
    concluida: tarefaEncontrada.concluida,
  });
}

async function remover(req, res) {
  const { id } = req.params;
  const tarefaRemovida = await Tarefa.findOneAndDelete({ _id: id });
  return res.status(204).end();
}

module.exports = {
  criar,
  listar,
  buscar,
  exibir,
  atualizar,
  remover,
};

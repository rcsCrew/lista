// passageiro.controller.js
const db = require("../models");
const Passageiro = db.Passageiro;

// Cria e salva um novo passageiro
exports.create = (req, res) => {
  const { name, cpf } = req.body;

  // Valida a requisição
  if (!name || !cpf) {
    res.status(400).send({
      message: "O conteúdo não pode ser vazio!"
    });
    return;
  }

  // Cria um passageiro
  const passageiro = {
    name,
    cpf
  };

  // Salva o passageiro no banco de dados
  Passageiro.create(passageiro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao criar o Passageiro."
      });
    });
};

// Lista todos os passageiros
exports.findAll = (req, res) => {
  Passageiro.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao recuperar os Passageiros."
      });
    });
};

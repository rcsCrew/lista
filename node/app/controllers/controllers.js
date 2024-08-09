const db = require("../models");
const Passageiro = db.Passageiro; // Certifique-se de que este modelo está importado corretamente

// Cria e salva um novo passageiro
exports.createPassageiro = (req, res) => {
  // Aqui você deve garantir que está recebendo o objeto passageiro corretamente
  const passageiro = {
    name: req.body.name,
    cpf: req.body.cpf
  };

  Passageiro.create(passageiro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erro ao criar Passageiro."
      });
    });
};


// Lista todos os passageiros
exports.findAllPassageiros = (req, res) => {
  Passageiro.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao recuperar os passageiros."
      });
    });
};


exports.deletePassageiro = (req, res) => {
  // Lógica para deletar um passageiro por ID
};

exports.createListaPassageiros = (req, res) => {
  // Lógica para criar uma lista de passageiros
};

exports.findAllListaPassageiros = (req, res) => {
  // Lógica para buscar todas as listas de passageiros
};

exports.searchListaPassageiros = (req, res) => {
  // Lógica para buscar lista de passageiros por item
};

exports.deleteListaPassageiros = (req, res) => {
  // Lógica para deletar uma lista de passageiros por ID
};

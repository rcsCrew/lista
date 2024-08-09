module.exports = (sequelize, Sequelize) => {
  const Passageiro = sequelize.define('passageiro', {
    name: { // Este deve corresponder ao que você está usando no frontend
      type: Sequelize.STRING,
      allowNull: false // Este campo não pode ser nulo
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false // Este campo não pode ser nulo
    }
  });

  return Passageiro;
};

module.exports = (sequelize, Sequelize) => {
  const Cpf = sequelize.define("cpf", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Cpf;
};

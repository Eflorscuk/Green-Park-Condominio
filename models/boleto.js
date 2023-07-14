'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Boleto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Boleto.init({
    nome_sacado: DataTypes.STRING,
    id_lote: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    linha_digitavel: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Boleto',
  });
  return Boleto;
};
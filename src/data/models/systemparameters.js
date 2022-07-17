'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SystemParameters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SystemParameters.init({
    GroupKey: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    Key: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SystemParameters',
  });
  return SystemParameters;
};
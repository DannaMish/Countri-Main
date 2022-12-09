const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

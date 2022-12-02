const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const reclamation= sequelize.define("reclamation",{
    contenu:{
      type:DataTypes.STRING,
      allowNull:false
    },


  });

  return reclamation;
}

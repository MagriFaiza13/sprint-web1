const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Delivrey= sequelize.define("Delivrey",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },


  });

  return Delivrey;
}

const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const facture= sequelize.define("facture",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
    prenom:{
      type:DataTypes.STRING,
      allowNull:false
    },
 adresse:{
        type:DataTypes.STRING,
        allowNull:false
      },
    telephone:{
      type:DataTypes.INTEGER,

    },
  
  });

  return facture;
}

const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const commande= sequelize.define("commande",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
   description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    quantite:{
      type:DataTypes.INTEGER,

    },
    prix:{
      type:DataTypes.FLOAT,
    },
  
   
  
  });

  return commande;
}

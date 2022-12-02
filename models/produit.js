const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const produit= sequelize.define("produit",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
    reference:{
      type:DataTypes.STRING,
      allowNull:false
    },
    quantite:{
      type:DataTypes.INTEGER,

    },
    prix:{
      type:DataTypes.FLOAT,
    },
   image:{
      type:DataTypes.STRING,

    },
   
   
  
  });

  return produit;
}

const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const pannier= sequelize.define("pannier",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
   quantite:{
      type:DataTypes.STRING,
      allowNull:false
    },
    description:{
      type:DataTypes.STRING,

    },
    prix:{
      type:DataTypes.INTEGER,
    },
 
   
   
  
  });

  return pannier;
}

const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const archive= sequelize.define("archive",{
    date_Archive:{
      type:DataTypes.STRING,
      allowNull:false
    },
    libelle_Archive:{
      type:DataTypes.STRING,
      allowNull:false
    },
    quantite:{
      type:DataTypes.INTEGER,

    },
   
   
   
   
  
  });

  return archive;
}

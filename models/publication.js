const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const publication= sequelize.define("publication",{
    nom_pub:{
      type:DataTypes.STRING,
      allowNull:false
    },
    extension_status:{
      type:DataTypes.STRING,
      allowNull:false
    },
    extension_video:{
      type:DataTypes.STRING,

    },
    type:{
      type:DataTypes.STRING,
    },
   picture:{
      type:DataTypes.STRING,

    },
   
   
  
  });

  return publication;
}

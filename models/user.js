const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const user= sequelize.define("user",{
    nom:{
      type:DataTypes.STRING,
      allowNull:false
    },
    prenom:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
   
    
    password:{
      
        type:DataTypes.STRING,
        allowNull:false
      },
      num_tel:{
      
        type:DataTypes.STRING,
        allowNull:false
      },
     
    
    


  });

  return user;
}

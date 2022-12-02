 const dbConfig = require("../config/config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize= sequelize;


//crud produit
db.categorie=require("./categorie")(sequelize,Sequelize);
db.produit=require("./produit")(sequelize,Sequelize);
db.categorie.hasMany(db.produit,{as:"produit",foreignkey:"categorieId"});
db.produit.belongsTo(db.categorie,{
  as:"categorie"
});
//crud facture
db.Delivrey=require("./Delivrey")(sequelize,Sequelize);
db.facture=require("./facture")(sequelize,Sequelize);
db.Delivrey.hasMany(db.facture,{as:"facture",foreignkey:"factureId"});
db.facture.belongsTo(db.Delivrey,{
  as:"Delivrey"
});
//crud user
//db.reclamation=require("./reclamation")(sequelize,Sequelize);
//db.user=require("./user")(sequelize,Sequelize);
//db.reclamation.hasMany(db.user,{as:"user",foreignkey:"userId"});
//db.user.belongsTo(db.reclamation,{
 // as:"user"
//});
//crud publication
db.archive=require("./archive")(sequelize,Sequelize);
db.publication=require("./publication")(sequelize,Sequelize);
db.publication.hasMany(db.archive,{as:"archive", foreignkey:"archiveId"});
db.archive.belongsTo(db.publication,{
  as:"publication"
});
//crud pannier
//db.pannier=require("./pannier")(sequelize,Sequelize);
//db.commande=require("./commande")(sequelize,Sequelize);
//db.pannier.hasMany(db.commande,{as:"commande",foreignkey:"commandeId"});
//db.commande.belongsTo(db.pannier,{
  //as:"pannier"
//});



module.exports = db;

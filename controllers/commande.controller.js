const { commande} = require("../models");

const createcommande = async (req, res, next) => {
  const { nom, quantite, description, prix ,produitId} = req.body;
  try {
    const createdcommande = await commande.create({
      nom,
      quantite,
      description,
      prix,
     

      produitId
    });
    res.status(201).json({
      createdcommande,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getcommande=async (req,res)=>{
  try{
    const{produitId}= req.params;
    const commandeData = await commande.findOne({
      where:{id:produitId},
    });
    if(!commandeData){
      throw new Error("commande not found");
    }
    res.status(200).json({
      commandeData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updatecommande = async(req,res)=>{
  try{
    const{produitId}=req.params;
    const[updated]=await commande.update(req.body,{
      where:{id:produitId},
    });
    if(update){
      const updatecommande = await commande.findOne({where:{id:eventId}});
      res.status(200).json({
        commande : updatecommande,
      });
    }
    throw new Error("commande not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deletecommande= async(req,res)=>{
  try{
    const{produitId}= req.params;
    const deleted = await commande.destroy({
     where:{id:produitId},
    });
    if(!deleted){
      throw new Error("commande not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllcommande = async(req,res)=>{
  try{
    const commandes = await commande.findAll();
    if(!commande){
      throw new Error("commande not found");
    }
    res.status(200).json({
      commandes
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createcommande,
  getcommande,
  updatecommande,
  deletecommande,
  getAllcommande,
};

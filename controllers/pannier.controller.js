const { produit} = require("../models");

const createproduit = async (req, res, next) => {
  const { nom, description, prix ,produitId} = req.body;
  try {
    const createdproduit = await produit.create({
      nom,

      quantite,
      description,
      prix,

      produitId
    });
    res.status(201).json({
      createdproduit,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getproduit=async (req,res)=>{
  try{
    const{produitId}= req.params;
    const produitData = await produit.findOne({
      where:{id:produitId},
    });
    if(!produitData){
      throw new Error("produit not found");
    }
    res.status(200).json({
      produitData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateproduit = async(req,res)=>{
  try{
    const{categorieId}=req.params;
    const[updated]=await produit.update(req.body,{
      where:{id:categorieId},
    });
    if(update){
      const updateproduit = await produit.findOne({where:{id:eventId}});
      res.status(200).json({
        produit : updateproduit,
      });
    }
    throw new Error("produit not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteproduit= async(req,res)=>{
  try{
    const{eventId}= req.params;
    const deleted = await produit.destroy({
     where:{id:eventId},
    });
    if(!deleted){
      throw new Error("produit not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllproduit = async(req,res)=>{
  try{
    const produits = await produit.findAll();
    if(!produit){
      throw new Error("produit not found");
    }
    res.status(200).json({
      produits
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createproduit,
  getproduit,
  updateproduit,
  deleteproduit,
  getAllproduit,
};

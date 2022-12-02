const { facture} = require("../models");

const createfacture = async (req, res, next) => {
  const { nom, prenom,adresse, description, telephone ,DelivreyId} = req.body;
  try {
    const createdfacture = await facture.create({
      nom,
     prenom,
      adresse,
      description,
      telephone,
      

      DelivreyId
    });
    res.status(201).json({
      createdfacture,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getfacture=async (req,res)=>{
  try{
    const{eventId}= req.params;
    const factureData = await facture.findOne({
      where:{id:eventId},
    });
    if(!factureData){
      throw new Error("facture not found");
    }
    res.status(200).json({
      factureData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updatefacture = async(req,res)=>{
  try{
    const{eventId}=req.params;
    const[updated]=await facture.update(req.body,{
      where:{id:eventId},
    });
    if(update){
      const updatefacture = await facture.findOne({where:{id:eventId}});
      res.status(200).json({
        facture : updatefacture,
      });
    }
    throw new Error("categorie not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deletefacture= async(req,res)=>{
  try{
    const{eventId}= req.params;
    const deleted = await facture.destroy({
     where:{id:eventId},
    });
    if(!deleted){
      throw new Error("facture not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllfacture = async(req,res)=>{
  try{
    const factures = await facture.findAll();
    if(!facture){
      throw new Error("facture not found");
    }
    res.status(200).json({
      factures
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createfacture,
  getfacture,
  updatefacture,
  deletefacture,
  getAllfacture,
};

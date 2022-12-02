const { reclamation } = require("../models");

const createreclamation = async (req, res, next) => {
  const { contenu,  } = req.body;
  try {
    const createdreclamation = await reclamation.create({
      contenu,

    });
    res.status(201).json({
      createdreclamation,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getreclamation=async (req,res)=>{
  try{
    const{reclamationId}= req.params;
    const reclamationData = await reclamation.findOne({
      where:{id:reclamationId},
    });
    if(!reclamationData){
      throw new Error("reclamation not found");
    }
    res.status(200).json({
      reclamationData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updatereclamation = async(req,res)=>{
  try{
    const{reclamationId}=req.params;
    const[updated]=await reclamation.update(req.body,{
      where:{id:reclamationId},
    });
    if(update){
      const updatereclamation = await reclamation.findOne({where:{id:reclamationId}});
      res.status(200).json({
        reclamation : updatereclamation,
      });
    }
    throw new Error("reclamation not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deletereclamation= async(req,res)=>{
  try{
    const{reclamationId}= req.params;
    const deleted = await reclamation.destroy({
     where:{id:reclamationId},
    });
    if(!deleted){
      throw new Error("reclamation not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllreclamation = async(req,res)=>{
  try{
    const reclamations = await reclamation.findAll();
    if(!reclamation){
      throw new Error("reclamation not found");
    }
    res.status(200).json({
      reclamations
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createreclamation,
  getreclamation,
  updatereclamation,
  deletereclamation,
  getAllreclamation,
};

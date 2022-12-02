const { archive} = require("../models");

const createarchive = async (req, res, next) => {
  const { date_Archive,libelle_Archive, quantite,publicationId} = req.body;
  try {
    const createdarchive = await archive.create({
     date_Archive,
   libelle_Archive,
      quantite,
     

      publicationId
    });
    res.status(201).json({
      createdarchive,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getarchive=async (req,res)=>{
  try{
    const{publicationId}= req.params;
    const archiveData = await archive.findOne({
      where:{id:publicationId},
    });
    if(!archiveData){
      throw new Error("archive not found");
    }
    res.status(200).json({
      archiveData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updatearchive = async(req,res)=>{
  try{
    const{publicationId}=req.params;
    const[updated]=await archive.update(req.body,{
      where:{id:publicationId},
    });
    if(update){
      const updatearchive = await archive.findOne({where:{id:eventId}});
      res.status(200).json({
        archive : updatearchive,
      });
    }
    throw new Error("categorie not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deletearchive= async(req,res)=>{
  try{
    const{publicationId}= req.params;
    const deleted = await archive.destroy({
     where:{id:publicationId},
    });
    if(!deleted){
      throw new Error("archive not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllarchive = async(req,res)=>{
  try{
    const archives = await archive.findAll();
    if(!archive){
      throw new Error("archive not found");
    }
    res.status(200).json({
      archives
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createarchive,
  getarchive,
  updatearchive,
  deletearchive,
  getAllarchive,
};

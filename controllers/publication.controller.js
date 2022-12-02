const { publication} = require("../models");

const createpublication = async (req, res, next) => {
  const { nom_pub, extension_status, extension_video, type ,picture} = req.body;
  try {
    const createdpublication = await publication.create({
      nom_pub,
    extension_status,
      extension_video,
     type,
      picture,
     

      userId
    });
    res.status(201).json({
      createdpublication,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getpublication=async (req,res)=>{
  try{
    const{userId}= req.params;
    const publicationData = await publication.findOne({
      where:{id:userId},
    });
    if(!publicationData){
      throw new Error("publication not found");
    }
    res.status(200).json({
      publicationData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updatepublication = async(req,res)=>{
  try{
    const{userId}=req.params;
    const[updated]=await publication.update(req.body,{
      where:{id:userId},
    });
    if(update){
      const updatepublication = await publication.findOne({where:{id:eventId}});
      res.status(200).json({
        publication : updatepublication,
      });
    }
    throw new Error("publication not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deletepublication= async(req,res)=>{
  try{
    const{userId}= req.params;
    const deleted = await publication.destroy({
     where:{id:userId},
    });
    if(!deleted){
      throw new Error("publication not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllpublication = async(req,res)=>{
  try{
    const publications = await publication.findAll();
    if(!publication){
      throw new Error("publication not found");
    }
    res.status(200).json({
      publications
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createpublication,
  getpublication,
  updatepublication,
  deletepublication,
  getAllpublication,
};

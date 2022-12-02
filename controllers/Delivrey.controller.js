const { Delivrey } = require("../models");

const createDelivrey = async (req, res, next) => {
  const { nom,  } = req.body;
  try {
    const createdDelivrey = await Delivrey.create({
      nom,

    });
    res.status(201).json({
      createdDelivrey,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const getDelivrey=async (req,res)=>{
  try{
    const{DelivreyId}= req.params;
    const DelivreyData = await Delivrey.findOne({
      where:{id:DelivreyId},
    });
    if(!DelivreyData){
      throw new Error("Delivrey not found");
    }
    res.status(200).json({
      DelivreyData,
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};
const updateDelivrey = async(req,res)=>{
  try{
    const{DelivreyId}=req.params;
    const[updated]=await Delivrey.update(req.body,{
      where:{id:DelivreyId},
    });
    if(update){
      const updateDelivrey = await Delivrey.findOne({where:{id:DelivreyId}});
      res.status(200).json({
        Delivrey : updateDelivrey,
      });
    }
    throw new Error("Delivrey not found");
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
  }
};
const deleteDelivrey= async(req,res)=>{
  try{
    const{DelivreyId}= req.params;
    const deleted = await Delivrey.destroy({
     where:{id:DelivreyId},
    });
    if(!deleted){
      throw new Error("Delivrey not found");
    }
    res.status(200).json({});
  }catch(error){
    res.status(500).json({
      error:error.message,


    });
    console.log(error);
  }
};
const getAllDelivrey = async(req,res)=>{
  try{
    const Delivreys = await Delivrey.findAll();
    if(!Delivrey){
      throw new Error("Delivrey not found");
    }
    res.status(200).json({
      Delivreys
    });
  }catch(error){
    res.status(500).json({
      error:error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createDelivrey,
  getDelivrey,
  updateDelivrey,
  deleteDelivrey,
  getAllDelivrey,
};

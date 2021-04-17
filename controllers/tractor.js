const models = require('../models')

var tractorController = module.exports;

tractorController.create = async (req, res) => {
    const {name, power} = req.body;
    //tractor exist
    const isExist = await models.Tractor.findOne({where:{name:name}});
    if(isExist) return res.status(409).json({status:409, message:"tractor already exist"});
    // create new tractor
    models.Tractor.create({name:name, power:power}).then(tractor => res.status(201).json({status:201, message:"created successful!", data:tractor})).catch(err => res.status(400).json({message:err.message}))

}
tractorController.getAll = async (req, res) => {
  const tractor = await models.Tractor.findAll();

  console.log(tractor);
  res.status(200).json({status:200, data:tractor})
};

const service = require("../model/service_model")

const AddserviceForm =async (req,res) =>{
    try {
        const responce = req.body;
        await service.create(responce)
        return res.status(200).json({message:"Message sent succesfully"})
    } catch (error) {
        return res.status(400).json({message:"data not found"})
    }
}

module.exports = AddserviceForm
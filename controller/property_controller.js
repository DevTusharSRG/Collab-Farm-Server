const property = require("../model/property_model")

const AddPropertyForm =async (req,res) =>{
    try {
        const responce = req.body;
        console.log(responce)
        await property.create(responce)
        return res.status(200).json({message:"Message sent succesfully"})
    } catch (error) {
        return res.status(400).json({message:"data not found"})
    }
}

module.exports = AddPropertyForm
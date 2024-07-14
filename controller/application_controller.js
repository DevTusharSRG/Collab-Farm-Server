const application = require("../model/application_model")

const ApplicationForm =async (req,res) =>{
    try {
        const responce = req.body;
        await application.create(responce)
        return res.status(200).json({message:"Message sent succesfully"})
    } catch (error) {
        return res.status(400).json({message:"data not found"})
    }
}

module.exports = ApplicationForm
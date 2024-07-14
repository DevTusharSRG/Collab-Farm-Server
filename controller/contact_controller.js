const Contact = require("../model/contact_model")

const contactForm =async (req,res) =>{
    try {
        const responce = req.body;
        await Contact.create(responce)
        return res.status(200).json({message:"Message sent succesfully"})
    } catch (error) {
        return res.status(400).json({message:"data not found"})
    }
}

module.exports = contactForm
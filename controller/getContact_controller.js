const Contact = require("../model/contact_model");

const getContactForm = async (req, res, next) => {
    try {
        const users = await Contact.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getContactForm;

const User = require("../model/user_model");

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id); // Use findByIdAndDelete to delete the user
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" }); // Handle other errors
    }
};

module.exports = deleteUserById;

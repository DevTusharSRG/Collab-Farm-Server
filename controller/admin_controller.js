const User = require("../model/user_model");

const getUsersForm = async (req, res, next) => {
    try {
        const users = await User.find({},{password:0});
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
 
const deleteUserById = async (req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({Message : "user deleted successfully"})
    } catch (error) {
        console.log(error);
    }
}



module.exports = getUsersForm ;

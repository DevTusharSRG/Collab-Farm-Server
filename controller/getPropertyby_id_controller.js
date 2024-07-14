const Service = require("../model/property_model");

const getPropertiesbyid = async (req, res) => {
    try {
        const pid = req.params.pid;
        const response = await Service.findOne({_id:pid});
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching services:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getPropertiesbyid;
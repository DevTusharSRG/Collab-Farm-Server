const Application = require("../model/application_model");

const getApplication = async (req, res) => {
    try {
        const response = await Application.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching services:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getApplication;

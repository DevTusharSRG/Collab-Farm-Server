const express = require("express");
const router = express.Router();
const deleteServiceById = require('../controller/deleteService_controller'); // Import the controller function

router.route("/services/delete/:id").delete(deleteServiceById); // Use the DELETE method

module.exports = router;

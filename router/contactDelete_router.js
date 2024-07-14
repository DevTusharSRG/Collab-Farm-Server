const express = require("express");
const router = express.Router();
const deleteContactById = require('../controller/contactDelete_controller'); // Import the controller function

router.route("/contacts/delete/:id").delete(deleteContactById); // Use the DELETE method

module.exports = router;

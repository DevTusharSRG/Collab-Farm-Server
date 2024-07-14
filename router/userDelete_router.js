const express = require("express");
const router = express.Router();
const deleteUserById = require('../controller/userDelete_controller'); // Import the controller function

router.route("/users/delete/:id").delete(deleteUserById); // Use the DELETE method

module.exports = router;

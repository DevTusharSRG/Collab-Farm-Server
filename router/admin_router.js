const express = require("express");
const router = express.Router();
const getUsersForm = require("../controller/admin_controller");
const authMiddleware = require('../middleware/auth_middleware');
const adminMiddleware = require("../middleware/admin_middleware");
const deleteUserById = require('../controller/admin_controller')

router.route("/users").get(authMiddleware,adminMiddleware,getUsersForm);

// router.route("/users/delete/:id").get(deleteUserById);

module.exports = router;
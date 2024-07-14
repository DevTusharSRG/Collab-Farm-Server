const express = require("express");
const router = express.Router();
const getContactForm = require("../controller/getContact_controller");
const authMiddleware = require('../middleware/auth_middleware');
const adminMiddleware = require("../middleware/admin_middleware");

router.route("/contact").get(authMiddleware,adminMiddleware,getContactForm);

module.exports = router;
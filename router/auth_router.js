const express = require("express")
const router = express.Router()
const authController = require("../controller/auth_controller")
const signupSchema = require("../validator/auth_validator")
const validate = require("../middleware/validate_middleware")
const authMiddleware = require("../middleware/auth_middleware")

router.route("/").get(authController.home)

router.route("/register").post(validate(signupSchema),authController.register)
router.route("/login").post(authController.login)
router.route("/user").get(authMiddleware , authController.user)

module.exports = router;
const express = require("express")
const router = express.Router();
const AddPropertyForm = require("../controller/property_controller")

router.route("/addproperty").post(AddPropertyForm);

module.exports = router

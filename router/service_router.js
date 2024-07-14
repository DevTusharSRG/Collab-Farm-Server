const express = require("express")
const router = express.Router();
const AddserviceForm = require("../controller/service_controller")

router.route("/addservice").post(AddserviceForm);

module.exports = router
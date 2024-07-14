const express = require("express")
const router = express.Router();
const ApplicationForm = require("../controller/application_controller")
const getPropertiesbyid = require("../controller/getPropertyby_id_controller");
const getApplication = require("../controller/getappplication_controller")

router.get("/apply/:pid", getPropertiesbyid);
router.get("/getapplication", getApplication);
router.route("/apply/:pid").post(ApplicationForm);

module.exports = router
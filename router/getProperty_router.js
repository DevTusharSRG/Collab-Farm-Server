const express = require("express");
const router = express.Router();
const getProperties = require("../controller/getProperty_controller");
const getPropertiesbyid = require("../controller/getPropertyby_id_controller");

router.get("/getproperties", getProperties);
router.get("/getproperties/:pid", getPropertiesbyid);

module.exports = router;

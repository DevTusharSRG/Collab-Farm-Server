const express = require("express");
const router = express.Router();
const getServiceForm = require("../controller/getService_controller");

router.get("/getservice", getServiceForm);

module.exports = router;

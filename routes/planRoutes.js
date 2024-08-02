const express = require("express");
const { createPlan, getPlans } = require("../controller/planController");
const router = express.Router();

router.route("/").post(createPlan).get(getPlans);

module.exports = router;

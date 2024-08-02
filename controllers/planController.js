const Plan = require("../models/Plan");

exports.createPlan = async (req, res) => {
  const { planTitle, pricePerMonth, planDetails } = req.body;

  const plan = new Plan({
    planTitle,
    pricePerMonth,
    planDetails,
  });
  
  const createdPlan = await plan.save();
  res.status(201).json(createdPlan);
};

exports.getPlans = async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
};

import Outage from "../models/Outage.js";

// @desc    Get all outages
export const getOutages = async (req, res, next) => {
  try {
    const outages = await Outage.find().sort({ createdAt: -1 });
    res.json(outages);
  } catch (err) {
    next(err);
  }
};

// @desc    Report new outage
export const createOutage = async (req, res, next) => {
  try {
    const outage = await Outage.create(req.body);
    res.status(201).json(outage);
  } catch (err) {
    next(err);
  }
};

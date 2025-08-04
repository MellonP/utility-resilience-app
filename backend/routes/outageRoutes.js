import express from "express";
import { getOutages, createOutage } from "../controllers/outageController.js";

const router = express.Router();

router.route("/")
  .get(getOutages)    // GET /api/outages
  .post(createOutage); // POST /api/outages

export default router;

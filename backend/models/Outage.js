import mongoose from "mongoose";

const outageSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // e.g., "Water" or "Electricity"
    location: { type: String, required: true },
    severity: { type: String, enum: ["Low", "Medium", "High"], required: true },
    reportedBy: { type: String, default: "Anonymous" },
    description: String,
    photoUrl: String, // Optional image
  },
  { timestamps: true }
);

export default mongoose.model("Outage", outageSchema);

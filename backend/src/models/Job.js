import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: [{ type: String }],
    budget: { type: Number, required: true },
    status: { type: String, enum: ["open", "assigned", "completed"], default: "open" },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: { type: [Number], default: [0, 0] }
    },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

jobSchema.index({ location: "2dsphere" });

export default mongoose.model("Job", jobSchema);

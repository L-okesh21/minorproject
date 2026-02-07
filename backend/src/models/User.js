import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["worker", "hirer"], required: true },
    skills: [{ type: String }],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: { type: [Number], default: [0, 0] }
    },
    trustScore: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 }
  },
  { timestamps: true }
);

userSchema.index({ location: "2dsphere" });

export default mongoose.model("User", userSchema);

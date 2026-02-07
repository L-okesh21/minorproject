import mongoose from "mongoose";

export const connectDatabase = async () => {
  const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/local-skill";
  await mongoose.connect(connectionString, {
    autoIndex: true
  });
};

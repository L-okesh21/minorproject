import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const buildToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role, name: user.name },
    process.env.JWT_SECRET || "local-dev-secret",
    { expiresIn: "7d" }
  );

export const register = async (req, res) => {
  const { name, email, password, role, skills, coordinates } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    role,
    skills,
    location: {
      type: "Point",
      coordinates: coordinates || [0, 0]
    }
  });

  return res.status(201).json({ token: buildToken(user), user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.json({ token: buildToken(user), user });
};

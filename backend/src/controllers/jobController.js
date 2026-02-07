import Job from "../models/Job.js";
import { buildDistanceQuery } from "../services/locationService.js";

export const createJob = async (req, res) => {
  const { title, description, skillsRequired, budget, coordinates } = req.body;

  const job = await Job.create({
    title,
    description,
    skillsRequired,
    budget,
    location: {
      type: "Point",
      coordinates: coordinates || [0, 0]
    },
    postedBy: req.user.id
  });

  return res.status(201).json(job);
};

export const listJobs = async (req, res) => {
  const { skills, lat, lng, maxDistanceKm = 10 } = req.query;
  const query = {};

  if (skills) {
    query.skillsRequired = { $in: skills.split(",") };
  }

  if (lat && lng) {
    query.location = buildDistanceQuery(Number(lat), Number(lng), Number(maxDistanceKm));
  }

  const jobs = await Job.find(query).populate("postedBy", "name trustScore");
  return res.json(jobs);
};

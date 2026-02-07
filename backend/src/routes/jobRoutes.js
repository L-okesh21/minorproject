import { Router } from "express";
import { createJob, listJobs } from "../controllers/jobController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", listJobs);
router.post("/", requireAuth, createJob);

export default router;

import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { applyJob, getApplication, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const applicationRouter = express.Router()

applicationRouter.get("/apply/:id", verifyToken, applyJob)
applicationRouter.get("/get", verifyToken, getAppliedJobs)
applicationRouter.get("/:id/applicants", verifyToken, getApplication)
applicationRouter.post("/status/:id/update", verifyToken, updateStatus)

export default applicationRouter
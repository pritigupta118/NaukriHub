import express from "express";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";



const jobRouter = express.Router();

jobRouter.post("/post",verifyToken, postJob)
jobRouter.get("/get",verifyToken, getAllJobs)
jobRouter.get("/get/:id",verifyToken, getJobById)
jobRouter.get("/getadminjobs", verifyToken, getAdminJobs)


export default jobRouter
import express from "express";

import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { singleUpload } from "../middleware/multer.js";


const companyRouter = express.Router();

companyRouter.post("/register",verifyToken, registerCompany)
companyRouter.get("/get-company",verifyToken, getCompany)
companyRouter.get("/get-company/:id",verifyToken, getCompanyById)
companyRouter.put("/update/:id", verifyToken, singleUpload,updateCompany)

export default companyRouter
import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from  "../utils/cloudinary.js"
export const registerCompany = async (req, res) => {
  try {
    const {companyName} = req.body

    if (!companyName) {
      return res.status(400).json({ message: "Company name is required!" });
    }

    const isCompanyExisted = await Company.findOne({ companyName });

    if (isCompanyExisted) {
      return res.status(400).json({ message: "Company already exists!" });
    }

   const newCompany = await Company.create({
    companyName,
    userId: req._id,
   });

   return res.status(201).json({ message: "Company created successfully", newCompany, success: true });
  } catch (error) {
    return res.status(500).send({ message: "Error while registering the company!", error: error });
  }
}

export const getCompany = async (req, res) => {
  try {
    const userId = req._id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({ message: "Company not found!" });

    }
    return res.status(200).json({ message: "Companies found successfully", companies, success: true });
  } catch (error) {
    return res.status(500).send({ message: "Error while searching companies!", error: error });
  }
}

export const getCompanyById = async (req, res) => {
try {
  const {id} = req.params
  const company = await Company.findById(id)
  if (!company) {
    return res.status(404).json({ message: "Company not found!" });

  }
  return res.status(200).json({ message: "Company found successfully", company, success: true });
} catch (error) {
  return res.status(500).send({ message: "Error while searching company by id!", error: error });

}
}

export const updateCompany = async (req, res) => {
  try {
    const {companyName, description, website, location} = req.body
    const {id} = req.params

    const file = req.file
    console.log("Company Logo: ",file);
    
    const fileUri = getDataUri(file)

    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)
    const logo = cloudResponse.secure_url

    const company = await Company.findByIdAndUpdate(id, {companyName, description, website, location, logo}, {new: true})

    if (!company) {
      return res.status(404).json({
          message: "Company not found.",
          success: false
      })
  }
  return res.status(200).json({ message: "Company updated successfully", company, success: true });
  } catch (error) {
    return res.status(500).send({ message: "Error while updating company!", error: error });
  }
}
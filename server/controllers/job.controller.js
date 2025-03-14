import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
try {
    const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
  
    const userId = req._id
  
    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
      return res.status(400).json({ message: 'Please fill all fields' })
  };
  
  const job = await Job.create({
    title,
    description,
    requirements: requirements.split(","),
    salary: Number(salary),
    location,
    jobType,
    experienceLevel: experience,
    position,
    company: companyId,
    created_by: userId
  });
  
  return res.status(201).json({
    message: "Job created successfully",
    job
  })
} catch (error) {
  return res.status(500).json({ message: "Something went wrong while creating the job", error });
}
}

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || ""

    const query = {
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
      ]
    }

     const jobs = await Job.find(query).populate({
          path: "company"
        }).sort({createdAt: -1})
    
    
        if (!jobs) {
          return res.status(404).json({ message: "Jobs not found" });
        }
    
        return res.status(200).json({
          jobs,
          success: true
      })
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching jobs", error });
  }
}

export const getJobById = async (req, res) => {
  try {
    const {id} = req.params;
    const job = await Job.findById(id).populate({
      path:"applications"
  });
        if (!job) {
          return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json({ job, success: true })
  } catch (error) {
    console.log("Error while fetching job:", error);
    return res.status(500).json({ message: "Error while fetching job", error });
  }
}

export const getAdminJobs = async (req, res) => {
  try {
    const admin = req._id

    const jobs = await Job.find({created_by: admin}).populate({path: "company"}).sort({createdAt: -1})

    if (!jobs) {
      return res.status(404).json({ message: "Jobs not found" });
    }
  
    return res.status(200).json(jobs)
  } catch (error) {
    return res.status(500).json({ message: "Error while fetching jobs", error });
  }
}
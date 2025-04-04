import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, password, role} = req.body;

    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
          message: "Something is missing",
          success: false
      });
  };

  const file = req.file
 

  const fileUri = getDataUri(file)

  const cloudResponse = await cloudinary.uploader.upload(fileUri.content)



  const user = await User.findOne({
      email
  });

  if (user) {
    return res.status(400).json({
      message: 'User already exist with this email.',
      success: false,
  })
  }
 
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullName,
    email,
    phoneNumber,
    password: hashedPassword,
    role,
    profile: {
      profilePhoto: cloudResponse.secure_url,
    }
});
const jwtToken = jwt.sign(
    {
      _id: newUser._id,
      email: newUser.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1d",
    }
  )

  res.cookie("token", jwtToken, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    httpOnly: true,
    sameSite: "none", 
    secure: true 
  });

  return res.status(201).json({ message: "Account created successfully",success: true , newUser });
  } catch (error) {
    console.error("Error during registration:", error); // Log the error details
    return res.status(500).send({ message: "Error signing up!", error: error });
  }
}

export const login = async (req, res) => {
  try {
      const { email, password, role } = req.body;
      
      if (!email || !password || !role) {
          return res.status(400).json({
              message: "Something is missing",
              success: false
          });
      };
      let user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({
              message: "Incorrect email or password.",
              success: false,
          })
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
          return res.status(400).json({
              message: "Incorrect email or password.",
              success: false,
          })
      };
      // check role is correct or not
      if (role !== user.role) {
          return res.status(400).json({
              message: "Account doesn't exist with current role.",
              success: false
          })
      };

     
      const jwtToken = jwt.sign({
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      });

      res.cookie("token", jwtToken, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
        sameSite: "none", 
        secure: true 
      });
  
      return res.status(200).json({ 
        message: `Welcome back ${user.fullName}`, 
        user,  
        success: true});
  } catch (error) {
    return res.status(500).send({ message: "Error logging in!", error: error });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token",{
      httpOnly: true,
      sameSite: "none", 
      secure: true 
    });

    return res.status(200).json({ message: "Logged out successful", success: true });
} catch (error) {
  return res.status(500).send({ message: "Error logging out!", error: error });
}
}

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
   
    const file = req.file
   
    

    const fileUri = getDataUri(file)

    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)
   
    let skillsArray
    if (skills) {
      skillsArray = skills.split(",")
    }
    

    const userId = req._id

    let user = await User.findById(userId)
    
    if (!user) {
      return res.status(400).json({
          message: "User not found.",
          success: false
      })
  }

  if(fullName) user.fullName = fullName
  if(email) user.email = email
  if(phoneNumber)  user.phoneNumber = phoneNumber
  if(bio) user.profile.bio = bio
  if(skills) user.profile.skills = skillsArray
  if(cloudResponse) {
    user.profile.resume = cloudResponse.secure_url
    user.profile.resumeOriginalName = file.originalname
}
  await user.save()

  user = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    profile: user.profile,
  }
  return res.status(200).json({

    message:"Profile updated successfully.",
    user,
    success: true
});

  } catch (error) {
    return res.status(500).send({ message: "Error updating profile!", error: error });
    
  }
}
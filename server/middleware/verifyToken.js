import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
try {
    const token = req.cookies.token
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" })
    }
      const decode = jwt.verify(token, process.env.JWT_KEY)
  
      if (!decode) {
        return res.status(401).json({
          message:"Invalid token",
          success:false
      })
      }
  
      req._id = decode._id
      next()
} catch (error) {
  console.log(error);
}
  
}
import express from 'express';
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { singleUpload } from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post('/register', singleUpload ,register);
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/profile/update", verifyToken, updateProfile)

export default userRouter
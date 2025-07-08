import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDb from './utils/db.js';
import userRouter from './routes/user.route.js';
import companyRouter from './routes/company.route.js';
import jobRouter from './routes/job.route.js';
import applicationRouter from './routes/application.route.js';
import path from "path"


const app = express();
app.use(express.json());
const _dirname = path.resolve()

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
const corsOption = {
  origin: "https://naukri-hub-kghy.vercel.app",
  credentials: true
}
app.use(cors(corsOption))
config()

app.use('/user', userRouter)
app.use('/company', companyRouter)
app.use('/job', jobRouter)
app.use('/application', applicationRouter)

app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*', (_,res) => {
  res.sendFile(path.resolve(_dirname,"client", "dist","index.html"))
})

connectDb()

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDb from './utils/db.js';
import userRouter from './routes/user.route.js';
import companyRouter from './routes/company.route.js';
import jobRouter from './routes/job.route.js';
import applicationRouter from './routes/application.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOption))
config()

app.use('/user', userRouter)
app.use('/company', companyRouter)
app.use('/job', jobRouter)
app.use('/application', applicationRouter)

connectDb()

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
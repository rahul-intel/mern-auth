import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './routes/user.js';

export const notfound = async (req, res) => {
  res.status(404).json("404 Not found!");
}

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//app.use("/", notfound);
app.use("/user", userRouter);
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jtwmn.mongodb.net/mern-auth?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
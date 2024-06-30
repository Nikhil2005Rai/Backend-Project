// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: './env'
})


connectDB()
.then(() => {
  app.on("error", (err) => {
    console.error(err);
    throw err;
  });
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
  })
})
.catch((error) => {
  console.log("MONGO DB connection failed: ",error);
  process.exit(1)
})































/*
import express from "express";
const app = express()
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) =>{
        console.error(err);
        throw err;
    })

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
require('dotenv').config({path: './env'})

import connectDB from "./db";



connectDB()






























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
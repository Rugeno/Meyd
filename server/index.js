import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

const app = express()
dotenv.config();


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to the database")
      } catch (error) {
        console.log(error);
      }

};

  

app.listen(8800,()=>{
    connect()
    console.log("Running Succesfully")
})
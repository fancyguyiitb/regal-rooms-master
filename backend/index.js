import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import cors from "cors";
// import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import User from "./models/User.js";
// import Place from "./models/Place.js";
// import Booking from "./models/Booking.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import imageDownloader from "image-downloader";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";
// import multer from "multer";
dotenv.config();

async function connectToMongo() {
  const uri = process.env.MONGO_URL;
  // "mongodb+srv://regalroomsadmin:juarez2004@cluster0.lpudvmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
    // Make the appropriate DB calls
    // await listDatabases(client);
  } catch (e) {
    console.error("Error connecting to Mongo: " + e);
  }
}
connectToMongo();

const app = express();
app.use(
  cors({
    credentials: true,
    //   origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(bodyParser.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

const port = 8000;

// =========================== ROUTES ======================================================================
app.get("/api/test", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  res.json("test ok").status(200);
});

// -------------------REGISTER---------------------------
app.post("/api/register", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { username, email, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//----------------------LOGIN--------------------
app.post("/api/login", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } else {
      res.status(422).json("Incorrect Password");
    }
  } else {
    res.json("User Not Found");
  }
});

//----------------------PROFILE--------------------
app.post("/api/profile", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  // const { token } = req.cookies;
  const { token } = req.body;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { username, email, _id } = await User.findById(userData.id);
      res.json({ username, email, _id });
    });
  } else {
    res.json(null);
  }
});

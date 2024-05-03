import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import DefaultData from "./default.js";
import Connection from "./database/db.js";
import Router from "./routes/route.js";

const app = express();

dotenv.config();

/*app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});*/

/*app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});*/

var corsOptions = {
  origin: "https://flipkart-frontend-dun.vercel.app/",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jmz1n1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

DefaultData();

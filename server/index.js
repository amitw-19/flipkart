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

/*app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://flipkart-frontend-dun.vercel.app"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});*/

var corsOptions = {
  origin: (origin, callback) => {
    callback(null, { origin: true });
  },
  credentials: true,
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  allowedHeaders: [
    "Access-Control-Allow-Origin",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  optionsSuccessStatus: 204,
};

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jmz1n1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

DefaultData();

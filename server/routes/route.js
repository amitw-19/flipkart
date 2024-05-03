import express from "express";

import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import cors from "cors";

var corsOptions = {
  origin: "https://flipkart-frontend-dun.vercel.app/",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

const router = express.Router();

/*app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});*/

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", cors(corsOptions), getProducts);
router.get("/product/:id", getProductById);

export default router;

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./mongoConfig.js";
import Posts from "./routes/posts.js";
export default () => {
  mongoose.connect(config.url, config.options);
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use("/posts", Posts());
  return app;
};

import express from "express";
import cors from "cors";
import router from "./routes/test.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import charactersRoute from "./routes/charactersRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5005;

const mongoDBConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    console.log("rocess.env.DB", process.env.DB);
    await mongoose.connect(process.env.DB);
    console.log("MongoDB is running in port", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

const addMiddlewares = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  const corsOptions = {
    origin: "http://breaking-bad-api-server.vercel.app",
    // origin: "http://localhost:3000",
    credentials: true,
  };
  // app.use(cors());
  app.use(cors());
};

const loadRoutes = () => {
  app.use("/api", router);
  app.use("/api/characters", charactersRoute);
};

const startServer = () => {
  app.listen(port, () => {
    console.log("Server is running in port" + port);
  });
};

// (async function controller() {
//   await addMiddlewares();
//   loadRoutes();
//   mongoDBConnection();
//   startServer();
// })();
(async function controller() {
  addMiddlewares();
  loadRoutes();
  try {
    await mongoDBConnection();
  } catch (error) {
    console.log("error starting MongoDB", error);
  }
  startServer();
})();

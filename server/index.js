import express from "express";
import cors from "cors";
import router from "./routes/test.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import charactersRoute from "./routes/charactersRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const mongoDBConnection = async () => {
  try {
    mongoose.set("strictQuery", false);

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
<<<<<<< HEAD
  app.use(cors());
=======

  // const corsOptions = {
  //   origin: "http://breaking-bad-api-server.vercel.app", //REVIEW en la propiedad origin  ,tendrias que insertar la direccion desde la que llega el request al backend, que será, o bien tu Localhost, cuando trabajes en local, o la dirección de vercel para el Client, cuando trabajes solo con la version deployeada. No obstante, no estabas usando las corsOptions, asi que mejor eliminalas.
  //   // origin: "http://localhost:3000",
  //   credentials: true,
  // };
  app.use(cors()); // REVIEW Si la idea es que en el Home del Client, es sencillamente informar de cual es el endpoint, no necesitas corsOptions, ya que no habra ningun request que llegue desde el Client, sino directamente a la direccion deployed del server.
>>>>>>> 1127a61de61c98158602e8d0b2901c1e4df8361f
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
//   await addMiddlewares(); //REVIEW addMiddlewares() no es una función asincrona, ese await es para mongoDBConnection()
//   loadRoutes();
//   mongoDBConnection();
//   startServer();
// })();

//NOTE he añadido un try/catch como medida extra para saber si pasa algo con la conexion a mongoDB, que a veces puede tardar mas de la cuenta.
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

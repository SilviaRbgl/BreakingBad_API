import express from "express";
import charactersModel from "../models/charactersModel.js";
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const allCharacters = await charactersModel.find({});
    console.log("allCharacters", allCharacters);
    res.status(200).json({
      number: allCharacters.length,
      allCharacters,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error,
      msg: "error in the server getting all characters",
    });
  }
});
export default router;

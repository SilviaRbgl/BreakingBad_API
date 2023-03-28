import express from "express";
import {
  getAllCharacters,
  getCharactersById,
} from "../controller/charactersController.js";

const router = express.Router();

router.get("/all", getAllCharacters);
router.get("/all/:byid", getCharactersById);
export default router;

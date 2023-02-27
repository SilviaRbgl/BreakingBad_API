import express from "express";
import { gettAllCharacters } from "../controller/charactersController.js";

const router = express.Router();

router.get("/all", gettAllCharacters);
export default router;

import charactersModel from "../models/charactersModel.js";

const gettAllCharacters = async (req, res) => {
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
};

export { gettAllCharacters };

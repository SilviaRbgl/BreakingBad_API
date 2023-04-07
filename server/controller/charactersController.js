import charactersModel from "../models/charactersModel.js";

const getAllCharacters = async (req, res) => {
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

const getCharactersById = async (req, res) => {
  console.log("req", req);
  console.log("req", req.params);
  const { byid } = req.params;
  try {
    const charactersById = await charactersModel.find({ char_id: byid }).exec();
    if (charactersById.length === 0) {
      res.status(200).json({
        msg: "no characters with this id",
      });
    }
    res.status(200).json({
      number: charactersById.length,
      charactersById,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error,
      msg: "server error getting characters by id",
    });
  }
};

export { getAllCharacters, getCharactersById };

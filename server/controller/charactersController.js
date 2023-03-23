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
  console.log("req>>", req.params);
  const { byId } = req.params;
  try {
    const charactersById = await charactersModel.find({ byId: byId }).exec();
    console.log("reqById", charactersById);
    res.status(200).json({
      number: charactersById.length,
      charactersById,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error,
      msg: "error in the server getting characters by id",
    });
  }
};

export { getAllCharacters, getCharactersById };

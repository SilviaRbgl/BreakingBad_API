import mongoose from "mongoose";
const { Schema } = mongoose;

const characterSchema = new Schema({
  char_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: String,
    required: true,
    unique: false,
  },
  occupation: {
    type: Array,
    required: true,
    unique: false,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    unique: false,
  },
  nickname: {
    type: String,
    required: false,
    unique: false,
  },
  appearance: {
    type: Array,
    required: false,
    unique: false,
  },
  portrayed: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: false,
    unique: false,
  },
  better_call_saul_appearance: {
    type: Array,
    required: false,
    unique: false,
  },
});

const characterModel = mongoose.model("character", characterSchema);

export default characterModel;

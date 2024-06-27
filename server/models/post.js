import mongoose from "mongoose";
const post = new mongoose.Schema({
  baslik: { type: String },
  yer: { type: String },
  acikla: { type: String },
  pansiyon: { type: String },
  price: { type: String },
  selectedFile: { type: String },

  randevu: { type: String },
  comments: {
    type: [String],
    default: [],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  goruntuCount: {
    type: Number,
    default: 7,
  },
});
export default mongoose.model("Post", post);

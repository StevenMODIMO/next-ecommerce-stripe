import { Schema, model, models } from "mongoose";

const ratingSchema = new Schema({
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

const productSchema = new Schema({
  productName: String,
  description: String,
  category: String,
  quantity: String,
  price: String,
  fileUrl: String,
  ratings: [ratingSchema],
});

export default models.Product || model("Product", productSchema);

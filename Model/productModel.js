import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  
});
export const Product=mongoose.model('products',ProductSchema)
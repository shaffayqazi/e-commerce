import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    //slug
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    //quantity
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    //image
    photo: {
      data: Buffer,
      contentType: String,
      
    },
    shipping: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
    //add the timestamps
  },
  {
    timestamps: true,
    // Add more fields here
  }
);

export default mongoose.model("Product", productSchema);

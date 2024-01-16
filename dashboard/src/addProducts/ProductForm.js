import React from "react";
import { useState } from "react";
import axios from "axios";
import CustomModal from "./Popup/PopUp.js";
import "./ProductForm.css";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, description, price, quantity, category, photo);
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("category", category);
      productData.append("photo", photo);
      const response = axios.post(
        "http://localhost:8000/api/v1/product/create-product",
        productData
      );

      console.log(response);
      if (response.success) {
        setSuccess(response.message);

        console.log(response.data);
        setError("");
      } else {
        setError(response.message);
        console.log(response.data);
        setSuccess("");
      }
      setIsModalOpen(true);
      setName("");
      setDescription("");
      setPrice("");
      setQuantity("");
      setCategory("");
      setPhoto("");

    } catch (error) {
      setError(error.message);
      setSuccess("");

      console.log(error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Product Form</h3>
        <br />
        <p>Product Name</p>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Product Name"
          aria-label="default input example"
        />
        <br />
        <p>Product Price</p>
        <input
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
          aria-label="default input example"
        />
        <br />
        <p>Product description</p>
        <input
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Decription"
          aria-label="default input example"
        />
        <br />
        <p>Product quantity</p>
        <input
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          placeholder="Quantity"
          aria-label="default input example"
        />
        <br />
        <p>Product Category</p>
        <input
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Product Category"
          aria-label="default input example"
        />
        <br />
        <p>Product Photo</p>
        <input
          className="form-control"
          onChange={(e) => setPhoto(e.target.files[0])}
          type="file"
          accept="image/*"
        />
        <br />
        <button className="btn btn-primary">Add Product</button>
      </form>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message="Form submitted successfully!"
      />
    </div>
  );
};

export default ProductForm;

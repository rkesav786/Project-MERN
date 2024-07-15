import React, { useState } from 'react';
import CF from "../src/CakeForm.module.css";
import axios from "axios";

const CakeForm = () => {
  // State variables for each form field
  const [imageUrl, setImageUrl] = useState('');
  const [CimageUrl, setCImageUrl] = useState('');
  const [cakeName, setCakeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [availability, setAvailability] = useState(true); // Default to true

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      imageUrl,
      CimageUrl,
      cakeName,
      description,
      price,
      category,
      subcategory,
      availability
    };
    console.log(formData); // Replace with your submission logic

axios.post("http://localhost:8000/AddProduct",formData)
.then(()=>{
  alert("New Product Added Successfully")
})
.catch((e)=>{
  alert("Failled To Create Product!")
})




    // Reset form fields if needed
    setImageUrl('');
    setCakeName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setSubcategory('');
    setAvailability(true); // Reset availability to true
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: 'pink' }}>
      <h2 className="mb-4" style={{ color: 'palevioletred' }}>Cake Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            id="imageUrl"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label"> Category Image URL</label>
          <input
            type="url"
            className="form-control"
            id="imageUrl"
            placeholder="Enter image URL"
            value={CimageUrl}
            onChange={(e) => setCImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cakeName" className="form-label">Cake Name</label>
          <input
            type="text"
            className="form-control"
            id="cakeName"
            placeholder="Enter cake name"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter cake description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              id="price"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {/* <option value="">Select category...</option>
            <option value="Cake">Cake</option>
            <option value="Biscuits">Biscuits</option>
            <option value="Brownies">Brownies</option>
            <option value="Sandwiches">Sandwiches</option>
            <option value="Soft Drinks">Soft Drinks</option> */}
              <option value="">Cake</option>
            <option value="Brithdaycake">Brithday Cake</option>
            <option value="Anniversarycake">Anniversary cake</option>
            <option value="Christmascake">Christmas Cake</option>
            <option value="NewYearCake">New Year Cake</option>
            <option value="BabyShowerCake">Baby Shower Cake</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="subcategory" className="form-label">Subcategory</label>
          <input
            type="text"
            className="form-control"
            id="subcategory"
            placeholder="Enter subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="availability" className="form-label">Availability</label>
          <select
            className="form-select"
            id="availability"
            value={availability ? "True" : "False"}
            onChange={(e) => setAvailability(e.target.value === "True")}
            required
          >
            <option value="True">Available</option>
            <option value="False">Unavailable</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CakeForm;
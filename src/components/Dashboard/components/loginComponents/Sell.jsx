import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../homepage/Navbar";
let user_avtar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSVk1DiBq4Us5qCMhx3ox1UGcFLJyTlUCfg&usqp=CAU";
function Sell() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);
  // const [token1,setToken1] =useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log("name is", name);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
   
    const emailchk = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/;
    if (emailchk.test(email)) {
      console.log(event.target.value)
        document.getElementById("email").style.border="5px solid green";
        return true;
    } else {
        document.getElementById("email").style.border = "5px solid red";
        return false;
    }
   
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    const{ value,maxLength}=event.target;
    const priceLen=value.slice(0,maxLength);
    setPrice(priceLen);
  };
  const handleQuantityChange = (event) => {
    const {value,maxLength}=event.target;
    const quanititylen=value.slice(0,maxLength);
    setQuantity(quanititylen);
  };
  const handleFileInput = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleFormSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("image", image);
    try {
      const response = await axios.post(
        "http://13.127.22.209:3000/api/v1/new/product",
        formData
      );
      toast.success("Successfully Added The Product!");
      console.log("Response is sell ", response);
    } catch (error) {
      console.log("error is", error.message);
      toast.error(error.message);
    }
  };
  const navBarToken = false;
  return (
    <>
      {" "}
      <Navbar visibilityToken={navBarToken}></Navbar>{" "}
      <div className="col-md-9 mb-md-0 mb-5 mainSell">
        {" "}
        <div className="loginavtar d-flex justify-content-center">
          {" "}
          <ToastContainer autoClose={1000} />{" "}
          <img src={user_avtar} alt="user" />{" "}
        </div>{" "}
        <form id="contact-form" onSubmit={handleFormSubmitHandler}>
          {" "}
          <div className="row ">
            {" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="name" className="">
                  {" "}
                  Your Name
                </label>{" "}
                <input
                  type="text"
                  id="name"
                  maxLength="20"
                  onChange={handleNameChange}
                  name="name"
                  value={name}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="email" className="">
                  {" "}
                  Your Email
                </label>{" "}
                <span id="email"></span>
                <input
                  type="email"
                  id="email"
                  onChange={handleEmailChange}
                  name="email"
                  value={email}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="title" className="">
                  {" "}
                  Shoe Title
                </label>{" "}
                <input
                  type="text"
                  maxLength="30"
                  id="subject"
                  onChange={handleTitleChange}
                  name="title"
                  value={title}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="title" className="">
                  {" "}
                  Location
                </label>{" "}
                <input
                  type="text"
                  maxLength="10"
                  id="subject"
                  onChange={handleLocationChange}
                  name="location"
                  value={location}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* //for entering the price of the shoes. */}
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="price" className="">
                  {" "}
                  Shoe Price
                </label>{" "}
                <input
                  type="number"
                  maxLength="6"
                  value={price}
                  onChange={handlePriceChange}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="md-form mb-0">
                {" "}
                <label htmlFor="quantity"> Enter Quantity </label>{" "}
                <input
                  type="number"
                  maxLength="2"
                  id="quantity"
                  name="quantity"
                  onChange={handleQuantityChange}
                  value={quantity}
                  className="form-control"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* for entering the shoe description */}
          <div className="row">
            {" "}
            <div className="col-md-12">
              {" "}
              <div className="md-form">
                {" "}
                <label htmlFor="message"> Shoe Description </label>{" "}
                <textarea
                  type="text"
                  id="message"
                  maxLength="100"
                  name="description"
                  onChange={handleDescriptionChange}
                  rows={2}
                  value={description}
                  className="form-control md-textarea"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <input type="file" name="image" onChange={handleFileInput} />{" "}
          <div className="text-center text-md-left">
            {" "}
            <button type="submit" className="btn btn-primary">
              {" "}
              Upload
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
}
export default Sell;

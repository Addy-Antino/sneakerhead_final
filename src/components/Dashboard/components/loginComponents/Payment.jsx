import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./payment.scss";
function Payment({ openmodal, setopenmodal,cartData }) {
  console.log("payment componets inside call ",cartData);
  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState();
  const [pinCode, setPin] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [product_id,setProduct_id]=useState(cartData[0].product_id)
 
  const hendeladdress = (event) => {
    setAddress(event.target.value);
  };
  const handlecityChange = (event) => {
    setcity(event.target.value);
  };
  const handlestateChange = (event) => {
    setState(event.target.value);
  };
  const handlepinChange = (event) => {
    const {value,maxLength}=event.target;
    const pinlen=value.slice(0,maxLength);
    setPin(pinlen);
  };
  const handlecountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handlephoneChange = (event) => {
    const {value,maxLength}=event.target;
    const phoneLen=value.slice(0,maxLength);
    setPhone(phoneLen);
  };


  const handleFormSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("pinCode", pinCode);
    formData.append("phoneNo", phoneNo);
    formData.append("product_id",product_id);
    try {
      const response = await axios.post(
        "http://13.127.22.209:3000/api/v1/order/new",
        formData
      );
      toast.success("Successfully!");
      console.log("Response is ", response);
    } catch (error) {
      console.log("error is", error.message);
      toast.error(error.message);
    }
  };
  const closeModal={
    color: "white",
    fontSize: "30px",
    fontWeight: 'bold',
    
    

  }
  return (
    <>
      <div class="modalone">
      <ToastContainer autoClose={1000} />
        <div class="modal-content" style={{backgroundColor:" #fefefe",width:"70%",borderRadius:"5px"}}>
          <div class="modal-header">
            <span class="close" onClick={() => setopenmodal(!openmodal)} style={closeModal} >
              &times;
            </span>
          </div>

          <div className="col-md-12  mb-5">
            <form id="contact-form" onSubmit={handleFormSubmitHandler}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      Address
                    </label>
                    <input
                      type="text"
                      id="name"
                      maxLength="50"
                      onChange={hendeladdress}
                      name="name"
                      value={address}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label>City</label>
                    <input
                      type="text"
                      maxLength="10"
                      onChange={handlecityChange}
                      value={city}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label>State</label>
                    <input
                      type="text"
                      maxLength='20'
                      id="subject"
                      onChange={handlestateChange}
                      name="state"
                      value={state}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label>Country</label>
                    <input
                      type="text"
                      maxLength="20"
                      value={country}
                      onChange={handlecountryChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="quantity"> Pin Code </label>
                    <input
                      type="number"
                      id="message"
                      maxLength="6"
                      name="pinCode"
                      onChange={handlepinChange}
                      value={pinCode}
                      className="form-control md-textarea"
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message"> Mobile No: </label>
                    <input
                      type="number"
                      maxLength="12"
                      id="message"
                      name="phoneNo"
                      onChange={handlephoneChange}
                      value={phoneNo}
                      className="form-control md-textarea"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center text-md-left">
                <button type="submit" className="btn btn-primary">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

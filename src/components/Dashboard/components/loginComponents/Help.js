import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../homepage/Navbar";

function Help() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMassage] = useState("");
  function changeName(e) {
    setname(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changesubject(e) {
    setSubject(e.target.value);
  }
  function changemassage(e) {
    setMassage(e.target.value);
  }

  function sendData(event) {
    event.preventDefault();
    console.log("inside api", name);
    axios
      .post("http://13.127.22.209:3000/api/v1/help", {
        // Data to be sent to the server
        name,
        email,
        subject,
        message,
      })
      .then((response) => {
        console.log("post requiest success", response);
        toast.success("send message");
      })
      .catch((error) => {
        console.error("error masum", error);
        toast.error(error);
      });
  }
  const navBarToken = false;
  return (
   
      <>
        <Navbar visibilityToken={navBarToken}></Navbar>
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly.
          </p>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 mb-md-0 mb-5" >
              <form onSubmit={sendData}>
              <ToastContainer autoClose={1000} />
                <div className="row" >
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={changeName}
                        name="name"
                        value={name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        onChange={changeEmail}
                        name="email"
                        value={email}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="rowSection">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        onChange={changesubject}
                        name="subject"
                        value={subject}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        onChange={changemassage}
                        name="message"
                        value={message}
                        rows={2}
                        className="form-control md-textarea"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="text-center text-md-left">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>{" "}
                </div>{" "}
              </form>
              <br />
              <br />
              <div className="status" />
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>Sector 49,Gurgaon,India</p>
                </li>
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>078273 25235</p>
                </li>
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>masum.r@antino.io</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    
  );
}

export default Help;

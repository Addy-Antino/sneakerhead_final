import React, { useState } from "react";
import "./Login.scss";
//this is necessary to do for routing,after login sending to "/dashboard"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//just to handle api
import axios from "axios";

function Login({ setIsAuthenticated }) {
  //using navigate package from "react-router-dom" for sending to other page after login....
  const navigate = useNavigate();
  // Declare state variables for email and password using useState hook...
  //state variable for storing login email
  const [email, setEmail] = useState("");
  //state for storing password used during login..
  const [password, setPassword] = useState("");
  //state variable for storing name used during registration
  const [name, setRegisterName] = useState("");
  //this is a token used for performing conditional rendering for login and signup page
  const [token, setToken] = useState(true);
  //this is form logging out error based on input using regex
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Define functions to update(using state) email and password incase of login
  function handleEmailChange(event) {
    event.preventDefault();
    setEmail(event.target.value);
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    } else {
      setErrorEmail("");
    }
  }
  // /we are handling password change ,as user is entering password
  function handlePasswordChange(event) {
    event.preventDefault();
    setPassword(event.target.value);
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }
  }
  //define and handle email,name ,password incase of registration ..(using usestate)
  function handleRegisterName(event) {
    event.preventDefault();
    setRegisterName(event.target.value);
    const nameRegex = /^[A-Za-z\s]+$/i;
    if (!nameRegex.test(name)) {
      setNameError("Name should be alphabets only");
      return;
    } else {
      setNameError("");
    }
  }
  //fx to handle when user enters email.
  function handleRegisterEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    } else {
      setErrorEmail("");
    }
  }
  //fx to handle when user enters password.
  function handleRegisterPassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }
  }

  // Define function to handle form submission(incase of login)
  const handleSubmitLogin = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    if (!email) {
      setErrorEmail("Email is required");
      return;
    }
    if (!password) {
      setErrorPassword("Password is required");
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    }
    
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long Atleast.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }

    //performing login using the axios...
    try {
      const response = await axios.post(
        "http://13.127.22.209:3000/api/v1/login",
        {
          email,
          password,
        }
      );
      console.log("api me gaya data");
      console.log("response aya : ", response);
      console.log(response.data.success);
      //authentication state is token for creating private route..
      setIsAuthenticated(response.data.success);
      navigate("/dashboard");
    } catch (error) {
      console.log("api me error aa data");
      console.log("error is ,", error.response.status);
      // console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
   //toasting out error message.
      switch (error.response.status) {
        case 400:
          toast.error(`The server cannot process request`);
          break;
        case 401:
          toast.error(`Invalid Email or Password`);
          break;
        case 403:
          toast.error(`the server is refusing to give the requested resource`);
          break;
        case 404:
          toast.error(`The server cannot find the requested resource.`);
          break;
        case 500:
          toast.error(
            `The server has encountered a situation it does not know how to handle.`
          );
          break;
        case 503:
          toast.error(`The server is not ready to handle the request. `);
          break;
        default:
          console.log("default ");
      }
      console.log(errorMessage);
    }

    // Log email and password values to console
    console.log(`Login Email: ${email}, LoginPassword: ${password}`);
  };

  //define a function for handling for submission incase of registration page..
  function handleSubmitRegister(event) {
    console.log("submission clicked");
    event.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/i;
    if (!nameRegex.test(name)) {
      setNameError("Name should be alphabets only");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email is invalid");
      return;
    }

    //if length of password is  smaller than 8 then  api me nhi jayga
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      return;
    }
    if (password.length >= 8) {
      setErrorPassword("");
    }

    ///this api is for registering.././...
    axios
      .post("http://13.127.22.209:3000/api/v1/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log("api me gaya data in register");
        console.log(response.data);
        // console.log(response.data.user.is_verified);
        // console.log(response.data.user);
        // navigate("/dashboard");
      })

      .catch((error) => {
        console.log("api me error aa gaya");
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
        const errorText = error.response.statusText;
        //toasting out error message
        switch (error.response.status) {
          case 400:
            toast.error(`The server cannot process request`);
            break;
          case 401:
            toast.error(`User Does Not exist`);
            break;
          case 403:
            toast.error(
              `the server is refusing to give the requested resource`
            );
            break;
          case 404:
            toast.error(`The server cannot find the requested resource.`);
            break;
          case 500:
            toast.error(
              `The server has encountered a situation it does not know how to handle.`
            );
            break;
          case 503:
            toast.error(`The server is not ready to handle the request. `);
            break;
          case 409:
            toast.error("Email already registered");
            break;
          default:
            toast.error(`${errorText}`);
        }
        // toast.error(errorText);
        console.log(errorMessage);
        // toast.error(errorMessage);
      });

    // Log email and password values to console
    console.log(
      ` Register Name: ${name} ,Register Email: ${email},Register Password: ${password}`
    );
  }

  //this is for changing value of token ,for rendering
  function handleRegisterButtonClick(event) {
    event.preventDefault();
    setErrorPassword("");
    setErrorEmail("");
    setNameError("");
    setEmail("");
    setPassword("");
    setNameError("");
    setToken((prevState) => !prevState);
  }

  // Render the login form,when the page loads up and  token value is "true"
  if (token) {
    return (
      <div className="container my-font">
        <ToastContainer autoClose={1000} />
        {/*  */}
        <form onSubmit={handleSubmitLogin}>
          {/* Email input field */}
          <div className="form-group">
            <div>
              <h3>Login Form</h3>
            </div>
            <label>Email</label>
            <input
              required
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="warning">{errorEmail}</div>
          </div>
          {/* Password input field */}
          <div className="form-group">
            <label>Password</label>
            <input
              required
              maxlength="25"
              class="form-control"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="warning">{errorPassword}</div>
          </div>
          {/* Submit button */}
          <div>
            <button id="loginButton" class="btn btn-block btn-lg btn-danger">
              <span class="glyphicon glyphicon-arrow-right"></span> Login
            </button>
            <button id="register" onClick={handleRegisterButtonClick}>
              {" "}
              Register
            </button>
          </div>
          <div>
            <button id="forgot">
              <Link to={`/ForgotPassword`}>Forgot Password?</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }

  //this is for registration..
  // Render the login form,when the page loads up an d  token value is "
  if (!token) {
    return (
      <div className="container my-font">
        <ToastContainer autoClose={1000} />
        {/*  */}
        <form onSubmit={handleSubmitRegister}>
          {/* Email input field */}
          <div className="form-group">
            <div>
              <h3>Register Form</h3>
            </div>
            <label>Name</label>
            <input
              required
              maxlength="40"
              class="form-control"
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={handleRegisterName}
            />
            <div className="warning">{nameError}</div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              required
              maxlength="40"
              class="form-control"
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={handleRegisterEmail}
            />
            <div className="warning">{errorEmail}</div>
          </div>

          {/* Password input field */}
          <div className="form-group">
            <label>Password</label>
            <input
              required
              id="input"
              maxlength="25"
              class="form-control"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handleRegisterPassword}
            />
            <div className="warning">{errorPassword}</div>
          </div>
          {/* Submit button */}
          <div>
            <button id="loginButton" class="btn btn-block btn-lg btn-danger">
              <span class="glyphicon glyphicon-arrow-right"></span> Register
            </button>
            <button id="register" onClick={handleRegisterButtonClick}>
              {" "}
              Login Here
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

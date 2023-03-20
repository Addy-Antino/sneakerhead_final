import { useState, useEffect } from "react";
import axios from "axios";
// import "./PasswordReset.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [warning, setwarning] = useState("");
  const [passwordChanged, setpasswordChanged] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const verificationLink = window.location.href;
    let token = verificationLink.split("/").slice(-1)[0];
    console.log("token is", token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationLink = window.location.href;
    let token = verificationLink.split("/").slice(-1)[0];
    try {
      if (verificationLink.includes("/api/v1/password/reset/") && token) {
        const response = await axios.put(
          `http://13.232.89.169:3000/api/v1/password/reset/${token}`,
          { token, password, confirmPassword }
        );
        console.log("then block is running");
        console.log("response is ", response);
        console.log("success  is ", response.data.success);
        setpasswordChanged(response.data.success);
        // redirect to login page on success
      }
    } catch (error) {
      console.error(error);
      const errorText = error.response.statusText;
      switch (error.response.status) {
        case 400:
          toast.error(`The server cannot process request`);
          break;
        case 401:
          toast.error(`User Does Not exist`);
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
          toast.error(`${errorText}`);
      }
      // console.log(errorMessage);
      // toast.error(errorMessage);
      console.log("catch block is running ");
      // handle error
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleconfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
    console.log(event.target.value);
    if (password !== event.target.value) {
      setwarning("Password did not match");
    } else {
      setwarning("");
    }
  };

  if (!passwordChanged) {
    return (
      <div>
         <ToastContainer autoClose={1000} />
        <div className="container1 my-font">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter your New Password.</label>
              <input
                required
                maxLength="40"
                className="form-control"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Confirm Your New Password.</label>
              <input
                required
                maxLength="40"
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleconfirmPasswordChange}
              />
              <div className="warning">{warning}</div>
              <button
                id="loginButton"
                type="submit"
                className="btn btn-block btn-lg btn-danger"
              >
                <span className="glyphicon glyphicon-arrow-right"></span> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
       <ToastContainer autoClose={1000} />
        <div className="container1 my-font">
          <form>
            <div className="form-group">
              <div className="alert alert-success mt-3">
                <div>Password has been successfully changed.</div>
                <div>
                  <Link to={`/`}> Login Now</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPassword;

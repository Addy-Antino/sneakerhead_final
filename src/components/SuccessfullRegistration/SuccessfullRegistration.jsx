import "./SuccessfullRegistration.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessfullRegistration.css";

const SuccessfullRegistration = () => {
  const Navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
      Navigate("/");
    }
    return () => clearInterval(timer);
  }, [Navigate, remainingTime]);

  return (
    <div>
      <div className="center">
        <p id="esucess">
          Email Verification Successfull,You will be redirected to Login page in{" "}
          {remainingTime} seconds...
          <div id="html-spinner"></div>
        </p>
      </div>
    </div>
  );
};

export default SuccessfullRegistration;

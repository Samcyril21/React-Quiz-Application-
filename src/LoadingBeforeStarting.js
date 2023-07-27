import React, { useState, useEffect } from "react";
import {Router,Route,Link,useNavigate} from 'react-router-dom'
import "./LoadingBeforeStarting.css";


const LoadingBeforeStarting = () => {
  let navigate=useNavigate();

  const [countdown, setCountdown] = useState(10);

  useEffect(() => {

    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      navigate("/TestInterface");
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigate]);

  return (
    <div id="loadingdiv">
      <h2>Your Test Begins in <span id="count">{countdown}</span> seconds</h2>
      <h4>Please Wait...</h4>
      <div id="instructions">
      <h5 id='note'>Note:</h5>
      <p>* This test contains JavaScript Basic Level MCQ Questions</p>
      <p>* Test Duration is 20 Minutes</p>
      <p>* At the End of the Test You will get your Result </p>
      </div>
      <h6>Will Be Redirected After 10 Seconds...</h6>
    </div>
  );
};

export default LoadingBeforeStarting;
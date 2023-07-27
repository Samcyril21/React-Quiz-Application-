import React,{useState, useEffect} from "react";
import "./WelcomePage.css";
import {Router,Route,Link,useNavigate} from 'react-router-dom'

export let Name="";

export default function App() {
  let navigate=useNavigate();

  let [name,Setname]=useState({UserName:""});

  let [isButtonDisabled, setIsButtonDisabled] = useState(true);


 function check(){

  console.log(name.UserName)
  console.log(name.UserName.length)

    if (name.UserName.length < 1) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }

  // let btnEnb = document.getElementById('btnEnb')
  function HandleInputs(e)
  {
    let key=e.target.name;
    Setname({...name,[key]:e.target.value})
    check()
  }

  function storename()
  {
    Name=name.UserName;
    navigate('/LoadingBeforeStarting')
    console.log(name)
  }

  return (
    <div class="welcomepagecontentContainer">
      <h1>Welcome to JavaScript MCQ</h1>
      <p>Please enter your full name</p>
      <input type="text" placeholder="Full Name" name="UserName" value={name.UserName} id="nameinpbox" onChange={HandleInputs}/>
      <button onClick={storename} disabled={isButtonDisabled} id="btnEnb">Enter</button>
      {/* {Timer? Result() : Questions()} */}
    </div>
  );
}



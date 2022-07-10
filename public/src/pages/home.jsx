import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  useEffect(()=>{
    var loginedUser = localStorage.getItem('chat-app-user')
    if (loginedUser === undefined || loginedUser === null){
      alert("Hi, you have not logined yet")
      navigate('/login')
      return
    }
    setValues(JSON.parse(loginedUser))
  },[])

  return (
    <div>Hello {values.username}. You have successfully comes to this page.</div>
  )
}

export default Home
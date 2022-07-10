import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/chat.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { RouteLogin } from "../utils/APIRoutes";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  
  useEffect(()=>{
    if (localStorage.getItem('chat-app-user')){
      console.log("you have logined before~")
      // navigate('/')
    }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(RouteLogin, {
        username,
        password,
      });
      if (data.status == false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status == true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/home");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (username === "" || password === "") {
      toast.error("Username and password are required ", toastOptions);
      return false;
    } 
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>Chat Me Tonight</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <span>
            Not a member yet? <Link to="/login">Login now!</Link>
          </span>
        </form>
      </FormContainer>

      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap: 1rem;
  align-items:center;
  bakcground-color:#131324;
  .brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
    img{
      height: 5rem;
    }
    h1{
      color:white;
      text-transform:uppercase;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color : #00000076;
    border-radius:2rem;
    border:0.1rem solid #4e0eff;
    padding: 3rem 5rem;
    input{
      background-color: white;
      padding: 1rem;
      border:0.1rem solid #4e0eff;
      border-radius:0.4rem;
      color:black;
      width:100%;
      font-size: 1rem;
      &:focus{
        border: 0.1rem solid #997af0;
      }
    }
    button{
      background-color: #997af0;
      color:white;
      border-radius:0.4rem;
      padding 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      font-size:1rem;
      text-transform:uppercase;
      transition: 0ms .5ms ease-in-out;
      &:hover{
        background-color: #4e0eff
      }
    }
    span{
      color:white;
      text-transform: uppercase;
      a{
        color:#4e0eff;
        text-decoration:none;
        font-weight: bold;
      }
    }
  }
`;

export default Register;

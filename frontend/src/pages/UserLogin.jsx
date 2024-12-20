import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";

import { useContext } from "react";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const {user,setUser}=useContext(userDataContext)
  const nav=useNavigate()

  const submitHandler =async (e) => {
    e.preventDefault();
    
    const userData={
        email:email,
        password:password
    }

     const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
     if(response.status===200){
      const data=response.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      nav('/home')
     }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white rounded px-4 mb-3 w-full  py-2 text-base placeholder:text-fff "
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="flex justify-center items-center bg-[#10b461] text-white rounded px-4 mb-5 w-full  py-2 text-base placeholder:text-fff ">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

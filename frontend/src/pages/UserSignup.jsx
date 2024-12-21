import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {userDataContext} from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  

  const nav = useNavigate();

  const {user,setUser}=React.useContext(userDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
   const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
   
   if(response.status===201){
    const data=response.data
    setUser(data.user)
    localStorage.setItem('token',data.token)
    nav('/home')
   }

    setEmail("");
    setfirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-6 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2 ">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee]  w-1/2 rounded px-4 border py-2 text-lg placeholder:text-base outline-none"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 border w-1/2 py-2 text-lg placeholder:text-base outline-none"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            autoComplete="off"
            className="bg-[#eeeeee] mb-6 rounded px-4 border w-full py-2 text-lg placeholder:text-base outline-none"
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
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login account
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
